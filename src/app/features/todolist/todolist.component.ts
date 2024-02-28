import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../state/models/task.model';
import { TaskService } from '../../shared/task.service';


import { addTask, removeTask, updateTaskState } from '../../state/actions/task.actions'; 

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  tasks$ = this.taskService.tasks$;

  selectedTask?: Task;

  constructor(private store: Store<{ tasks: ReadonlyArray<Task> }>, private taskService: TaskService) {
    this.tasks$ = store.select(state => state.tasks);
  }

  private lastTaskId = 1000;

  addTask(taskName: string, taskState: string = 'not started'): void {
    if (!taskName) {
      return;
    }
    const taskId = ++this.lastTaskId;
    const newTask: Task = { id: taskId, name: taskName, state: taskState, changeState: false };
    this.store.dispatch(addTask({ task: newTask }));
  }

  removeTask(taskId : number): void {
    this.store.dispatch(removeTask({ id: taskId }));
  }

  updateTask(taskId: number, newState: string): void {
    this.store.dispatch(updateTaskState({ id: taskId, newState }));
    this.closeModal();
  }

  openModal(task: Task): void {
    this.selectedTask = task;
  }

  closeModal(): void {
    this.selectedTask = undefined;
  }
}
