import {combineReducers} from "redux";
import UserReducer from './UserReducer';
import TodoReducer from "./TodoReducer";

const RootReducer = combineReducers({
    user:UserReducer,
    todo:TodoReducer
});
export default RootReducer;