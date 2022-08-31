export interface User {
        email: string;
        firstname: string;
        lastname: string;
}
export interface Signin {
    username: string;
    password: string;
    rememberMe: boolean;
}

export interface Signup {
    role: string;
    user: {
        email: string;
        firstname: string;
        lastname: string;
        password: string;
    }
}

export interface ResetPass {
    key: string;
    newPassword: string;
}
