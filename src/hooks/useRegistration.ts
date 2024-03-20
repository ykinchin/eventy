import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { PATHS } from '../shared/constants/paths';
import { UserCredentials } from '../shared/types/userType';

const useRegistration = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async (userForm: UserCredentials) => {
        setIsLoading(true);
        try {
            await createUserWithEmailAndPassword(
                auth,
                userForm.email,
                userForm.password,
            );

            navigate(PATHS.successResult, {
                state: { prevPath: PATHS.registration },
                replace: true,
            });

            setDoc(doc(db, 'user', userForm.email), {
                history: [],
                favorite: [],
            });
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                const errorCode = error.code;

                if (errorCode === 'auth/email-already-in-use') {
                    navigate(PATHS.errorUserExistResult, {
                        state: { prevPath: PATHS.registration },
                        replace: true,
                    });
                } else {
                    navigate(PATHS.errorResult, {
                        state: { prevPath: PATHS.registration },
                        replace: true,
                    });
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, registerUser };
};

export default useRegistration;
