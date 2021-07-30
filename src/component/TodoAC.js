import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import * as todoActionCreator from '../actionCreators/TodoActions';
import {bindActionCreators} from "redux";
import {loadAllTodos} from "../actionCreators/TodoActions";
class TodoAC extends Component {

    constructor(props) {
        super(props);
    }

    loadTodosHandler() {
        // this.props.todoLoading();
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        //     .then(response=>{
        //         this.props.todoSuccess(response.data);
        //     }).catch(error=>{
        //         this.props.todoFailure(error.message)
        //      });
        this.props.todoLoadAll();
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
                    {this.props.todo.error != '' ? <div style={{fontSize:'12px',color:'red'}}>{this.props.todo.error}</div> : null}
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
           todoLoading: bindActionCreators(todoActionCreator.todoFetchingLoading,dispatch),
           todoSuccess: bindActionCreators(todoActionCreator.todoFetchingSuccess,dispatch),
           todoFailure: bindActionCreators(todoActionCreator.todoFetchingFailure,dispatch),
           todoLoadAll: bindActionCreators(todoActionCreator.loadAllTodos,dispatch),
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoAC);