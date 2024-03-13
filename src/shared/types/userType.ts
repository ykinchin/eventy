export type UserCredentials = {
    email: string;
    password: string;
};

export type ExtendedUserCredentials = UserCredentials & {
    confirmPassword: string;
};
