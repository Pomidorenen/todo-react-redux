import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodoById,toggleTodoComplete}) => {
    return (
        <ul className='todos'>
            {
                todos.map(({id,text,completed})=>{
                    return<TodoItem id={id}
                                    key={id}
                                    text={text}
                                    completed={completed}
                                    removeTodoById={removeTodoById}
                                    toggleTodoComplete={toggleTodoComplete}
                    />
                })
            }
        </ul>
    );
};

export default TodoList;