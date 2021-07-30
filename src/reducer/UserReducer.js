import {USER_LOGGED_IN,USER_LOGGED_OUT} from "../action/UserActions";

const initialUserState = {
    users:[],
    loggedIn:false,
}
const UserReducer = (state = initialUserState,action)=>{
    switch (action.type) {
        case USER_LOGGED_IN :
            return {...state,loggedIn:true}
        case USER_LOGGED_OUT :
            return {...state,loggedIn:false}
        default :
            return initialUserState
    }
}
export default UserReducer;