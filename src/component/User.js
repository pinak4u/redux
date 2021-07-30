import React, {Component} from 'react';
import {USER_LOGGED_OUT,USER_LOGGED_IN} from "../action/UserActions";
import {connect} from "react-redux";

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const showUserStatus = this.props.user.loggedIn  ? 'User Logged In' : 'User Logged Out'
        return (
            <div>
                User Status => {showUserStatus}
                <p>
                    <button onClick={()=>{this.props.handleToggleState(this.props.user.loggedIn)}}>Toggle Users State</button>
                </p>
            </div>
        );
    }
}

function mapStateToProps  (state){
    const {user} = state
    return {user};
}
function mapDispatchToProps  (dispatch){
   return {
        handleToggleState: (userStatus)=>{
            let userEvent = userStatus ? USER_LOGGED_OUT : USER_LOGGED_IN
            return dispatch({type:userEvent})
        }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);