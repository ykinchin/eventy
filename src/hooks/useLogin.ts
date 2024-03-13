import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { PATHS } from '../shared/constants/paths';
import { UserCredentials } from '../shared/types/userType';

const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const loginUser = async (userForm: UserCredentials) => {
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(
                auth,
                userForm.email,
                userForm.password,
            );
            navigate(PATHS.main);
        } catch (error: unknown) {
            navigate(PATHS.errorResult, {
                state: { prevPath: PATHS.registration },
                replace: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, loginUser };
};

export default useLogin;
