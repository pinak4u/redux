import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import {TODO_FETCHING_FAILURE, TODO_FETCHING_LOADING, TODO_FETCHING_SUCCESS} from "../action/TodoActions";
class Todo extends Component {
    constructor(props) {
        super(props);
    }
    loadTodosHandler() {
        this.props.todoLoading();
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response=>{
                this.props.todoSuccess(response.data);
            }).catch(error=>{
                this.props.todoFailure(error.message)
        });
    }
    render() {
        const todosList = this.props.todos.length > 0 ?
                          this.props.todos.map(singleTodo => <div key={singleTodo.id}>{singleTodo.title} - {singleTodo.completed?"Completed":"Not Completed"}</div>):null;
        const todoLoading = this.props.todo.loading;
        return (
            <div>
                TODOS

                <p>
                    <button onClick={()=>{this.loadTodosHandler()}}>Load Todos</button>
                </p>
                <div>
                    {todoLoading ? <div>Loading Todos from server</div> : null}
                    {this.props.todo.error != '' ? <div>{this.props.todo.error}</div> : null}
                    {todosList}
                </div>
            </div>
        );
    }
}

function mapStateToProps  (state){
    const {todo} = state
    const {todos} = todo;
    return {todos,todo};
}
function mapDispatchToProps  (dispatch){
   return {
        todoLoading : ()=>{dispatch({type:TODO_FETCHING_LOADING})},
        todoSuccess : (todos)=>{dispatch({type:TODO_FETCHING_SUCCESS,payload:todos})},
        todoFailure : (errorMessage)=>{dispatch({type:TODO_FETCHING_FAILURE,payload:errorMessage})}
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo);