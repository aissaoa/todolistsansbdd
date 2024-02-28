import { createSelector } from '@ngrx/store';
import { Task } from '../models/task.model';

export const selectTasks = (state: { tasks: ReadonlyArray<Task> }) => state.tasks;

export const selectNumberOfTasks = createSelector(
  selectTasks,
  (tasks) => tasks.length
);