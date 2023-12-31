import React,{useState} from "react";
import TodoList from "./TodoList";
import './App.css';

const App=()=>{
  const [task,setTask] =useState("");
  const [todos,setTodos]=useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value)
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask('');
  };

  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=> index !==indexValue);
    setTodos(newTodos);
  }


  return (
    <div>
      <center>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title"> Todo Management Application</h4>
          <form onSubmit={submitHandler}>
            <input type="text" name="todo" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
            <input type="submit" value="Add" name="Add"  />
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div>
      </center>
    </div>
  );
};

export default App;