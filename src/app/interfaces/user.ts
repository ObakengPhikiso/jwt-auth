export interface User {
        email: string;
        firstName: string;
        lastName: string;
}
export interface Signin {
    username: string;
    password: string;
    rememberMe: boolean;
}

export interface Signup {
    roles: string;
    user: {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
    }
}

export interface ResetPass {
    key: string;
    newPassword: string;
}
