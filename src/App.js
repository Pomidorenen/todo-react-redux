import {useState} from "react";
import "./app.scss";
import InputField from "./components/inputField";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const removeTodoById = (todoId)=>{
    setTodos(todos.filter(({id})=>id!==todoId));
  }
  const toggleTodoComplete = (todoId)=>{
    setTodos(
        todos.map((todo)=>{
          if(todo.id !== todoId)return todo;
          return {
            ...todo,
            completed:!todo.completed
          };
        })
    )
  }
    const addTodo = ()=>{
        if(text.trim().length){
            setTodos([
                ...todos,
                {
                    id:new Date().toISOString(),
                    text,
                    completed:false
                }
            ]);
            setText('');
        }
    }
  return (
    <div className="App">
      <InputField
          setText={setText}
          text={text}
          addTodo = {addTodo}
      />
        <TodoList
            todos={todos}
            removeTodoById = {removeTodoById}
            toggleTodoComplete = {toggleTodoComplete}
        />
    </div>
  );
}

export default App;
