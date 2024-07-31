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
            <hr/>
            <h4>
                {`Total task all:${todos.length}`}
            </h4>
            <h4>
                {`Total task completed:${todos.filter(({completed})=>completed===true).length}`}
            </h4>
        </ul>
    );
};

export default TodoList;