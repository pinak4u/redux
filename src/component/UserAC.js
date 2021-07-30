import React, {Component} from 'react';
import {connect} from "react-redux";
import * as UserActionCreateors from '../actionCreators/UserActions'
class UserAC extends Component {
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
            let userEvent = userStatus ? UserActionCreateors.userLoggedOut() : UserActionCreateors.userLoggedIn();
            return dispatch(userEvent)
        }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserAC);