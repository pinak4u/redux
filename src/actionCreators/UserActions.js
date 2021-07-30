export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function userLoggedIn(){
    return{
        type:USER_LOGGED_IN
    }
}

export function userLoggedOut(){
    return{
        type:USER_LOGGED_OUT
    }
}