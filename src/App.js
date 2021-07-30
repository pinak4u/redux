import './App.css';
import User from "./component/User";
import Todo from "./component/Todo";
import UserAC from "./component/UserAC";
import TodoAC from "./component/TodoAC";

function App() {
  return (
    <div className="App">
        <User/>
        <hr/>
        <UserAC/>
        <hr/>
        <Todo/>
        <hr/>
        <TodoAC/>
    </div>
  );
}

export default App;
