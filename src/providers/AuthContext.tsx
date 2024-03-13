import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase/firebase';

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
        await signOut(auth);
        setCurrentUser(null);
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
