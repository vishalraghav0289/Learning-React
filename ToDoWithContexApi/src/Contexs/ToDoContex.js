import { createContext,useContext } from "react";


export const ToDoContex= createContext({
    todos: [
        {
            id: 1,
            todo:"todomsg",
            completed: false,
        },{},{}
    ],
    addToDo: (todo)=>{},
    updatedToDo: (id,todo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{},


})


export const useToDo=()=>{
    return useContext(ToDoContex)
}
export const ToDoProvider= ToDoContex.Provider