//hook
import {useState, userState} from "react";

//todo application
//todo
//{
//  todos:[{title:"todo1",description:"First todo",complete false}]
//}
function App() {
  const [todos,setTodos]=useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:false
  },{
    title:"Study DSA",
    description:"Go to gym from 9-10",
    completed:true
  },{
    title:"Study DSA",
    description:"Go to gym from 9-10",
    completed:true
  }
])

  function addTodo(){
    setTodos([...todos,{
      title:"new Todo",
      description:"desc of new todo"
    }])
  }
  
  return (
    <>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        <Todo title={todos[0].title} description={todos[0].description}></Todo>
        <Todo title={todos[1].title} description={todos[1].description}></Todo>
        {todos.map(function(todo){
          return<Todo title={todo.title} description={todo.description}/>
        })}
      </div>
    </>
  )
}

//todo app,{
// title,
//desc,
//complete
//}
function Todo(props){

  

  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}

export default App
