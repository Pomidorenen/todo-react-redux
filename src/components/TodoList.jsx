import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector(state=>state.todos.todos);
    return (
        <ul className='todos'>
            {
                todos.map(({id,text,completed})=>{
                    return<TodoItem id={id}
                                    key={id}
                                    text={text}
                                    completed={completed}
                    />
                })
            }
        </ul>
    );
};

export default TodoList;