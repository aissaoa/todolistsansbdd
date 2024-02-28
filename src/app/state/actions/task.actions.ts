import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const addTask = createAction('[Task List] Add Task', props<{ task: Task }>());

export const removeTask = createAction('[Task List] Remove Task', props<{ id: number }>());

export const updateTaskState = createAction('[Task List] Update Task State', props<{ id:  number; newState: string }>());