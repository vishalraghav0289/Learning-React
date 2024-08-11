import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text: "hello world"
    }]
}

export const ToDoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo:(state , action)=>{
            const todo={
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeToDo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateToDo: (state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id ===action.payload.id ? action.payload : todo)
        }
    }

})

export const {addToDo,removeToDo,updateToDo}=ToDoSlice.actions
export default ToDoSlice.reducer