import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask, updateTaskState } from '../actions/task.actions';
import { Task } from '../models/task.model';

export const initialState: ReadonlyArray<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(removeTask, (state, { id }) => state.filter(task => task.id !== id)),
  on(updateTaskState, (state, { id, newState }) => state.map(task => 
    task.id === id ? { ...task, state: newState } : task
  ))
);