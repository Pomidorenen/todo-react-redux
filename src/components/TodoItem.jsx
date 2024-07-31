import React from 'react';
import {useDispatch} from "react-redux";
import {toggleTodoCompleted,removeTodo} from "../store/todoSlice.js";
const TodoItem = ({id,completed,text}) => {
    const dispatch = useDispatch();
    const dispatchRemoveTodo = ()=>dispatch(removeTodo({id}));
    const dispatchToggleTodoCompleted = ()=>dispatch(toggleTodoCompleted({id}));
    return (
        <li key={id} className='todo-item'>
            <input type='checkbox'
                   checked={completed}
                   onChange={dispatchToggleTodoCompleted}
            />
            <span>
                {text}
            </span>
            <span
                onClick={dispatchRemoveTodo}
                className='delete'>
                &times;
            </span>
        </li>

    );
};

export default TodoItem;