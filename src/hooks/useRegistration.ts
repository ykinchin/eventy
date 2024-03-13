            navigate(PATHS.successResult, {
                state: { prevPath: PATHS.registration },
                replace: true,
            });
        } catch (error: unknown) {
            if (error instanceof FirebaseError) {
                const errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    navigate(PATHS.errorUserExistResult, {
                        state: { prevPath: PATHS.auth },
                        replace: true,
                    });
                } else {
                    navigate(PATHS.errorResult, {
                        state: { prevPath: PATHS.auth },
                        replace: true,
                    });
                }
