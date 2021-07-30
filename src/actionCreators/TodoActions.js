import axios from "axios";

export const TODO_FETCHING_LOADING = 'TODO_FETCHING_LOADING';
export const TODO_FETCHING_SUCCESS = 'TODO_FETCHING_SUCCESS';
export const TODO_FETCHING_FAILURE = 'TODO_FETCHING_FAILURE';

export function todoFetchingLoading(){
    return {
        type:TODO_FETCHING_LOADING,
    }
}

export function todoFetchingSuccess(todos){
    return {
        type:TODO_FETCHING_SUCCESS,
        payload:todos
    }
}

export function todoFetchingFailure(message){
    return {
        type:TODO_FETCHING_FAILURE,
        payload:message
    }
}

export function loadAllTodos(){
    return (dispatch)=>{
        dispatch(todoFetchingLoading());
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response=>{
                dispatch(todoFetchingSuccess(response.data));
            }).catch(error=>{
                dispatch(todoFetchingFailure(error.message));
        });
    }
}