import {useState} from "react";
import "./app.scss";
import InputField from "./components/inputField";
import TodoList from "./components/TodoList";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const dispatchAddTodo = ()=>{
      if(text.trim().length) {
          dispatch(addTodo({text}));
          setText('');
      }
  }


  return (
    <div className="App">
      <InputField
          setText={setText}
          text={text}
          handleSubmit = {dispatchAddTodo}
      />
        <TodoList/>
    </div>
  );
}

export default App;
