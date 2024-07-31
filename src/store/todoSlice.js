import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo({todos},action){
            todos.push({
                id: new Date().toISOString(),
                text:action.payload.text,
                completed: false
            })
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(({id})=>id!==action.payload.id);
        },
        toggleTodoCompleted(state, action){
            const toggleTodo = state.todos.find(({id})=>id === action.payload.id);
            toggleTodo.completed = !toggleTodo.completed;
        }
    }
})

export const {addTodo,removeTodo,toggleTodoCompleted} = todoSlice.actions;

export default todoSlice.reducer;