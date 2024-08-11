import {configureStore} from '@reduxjs/toolkit';
import ToDoReducer from '../Features/ToDo/ToDoSlice'


export const store =configureStore({
    reducer: ToDoReducer
})