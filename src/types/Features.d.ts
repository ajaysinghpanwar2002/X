export type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}

export type InitialState ={
    value:AuthState;
}