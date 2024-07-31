import React from 'react';

const TodoItem = ({id,completed,text,toggleTodoComplete,removeTodoById}) => {
    return (
        <li key={id} className='todo-item'>
            <input type='checkbox'
                   checked={completed}
                   onChange={()=>toggleTodoComplete(id)}
            />
            <span>
                {text}
            </span>
            <span
                onClick={()=>removeTodoById(id)}
                className='delete'>
                &times;
            </span>
        </li>

    );
};

export default TodoItem;