import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { PATHS } from '../shared/constants/paths';

type Props = {
    children?: ReactNode;
};

type ContextType = {
    currentUser: string | null;
    logOut: () => void;
    isLoading: boolean;
};

export const AuthContext = createContext<ContextType>({
    currentUser: null,
    logOut: () => {},
    isLoading: false,
});

export const AuthProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                if (user) {
                    setCurrentUser(user.email);
                }
                setIsLoading(false);
            },
            () => {
                setIsLoading(false);
            },
        );
        return () => unsubscribe();
    }, []);

    const logOut = async () => {
        try {
            setIsLoading(true);
            await signOut(auth);
            setCurrentUser(null);
        } catch {
            navigate(PATHS.errorDefault, { state: { prevPath: PATHS.auth } });
        } finally {
            setIsLoading(false);
        }
    };

    const value = useMemo(
        () => ({
            currentUser,
            logOut,
            isLoading,
        }),
        [currentUser, isLoading],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
