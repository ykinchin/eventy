        } catch (error: unknown) {
            navigate(PATHS.errorResult, {
                state: { prevPath: PATHS.auth },
                replace: true,
            });
