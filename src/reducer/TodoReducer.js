import {TODO_FETCHING_LOADING,TODO_FETCHING_FAILURE,TODO_FETCHING_SUCCESS} from "../action/TodoActions";

const initialTodoState = {
    loading:false,
    todos:[],
    error:'',
}
const TodoReducer = (state = initialTodoState,action)=>{
    switch (action.type) {
        case TODO_FETCHING_LOADING :
            return {...state,loading:true,todos: [],error:''}
        case TODO_FETCHING_SUCCESS :
            return {...state,loading:false,todos: action.payload,error:''}
        case TODO_FETCHING_FAILURE :
            return {...state,loading:false,todos: [],error:'Something went wrong fetching todos from Server...'}
        default :
            return initialTodoState

    }
}
export default TodoReducer;