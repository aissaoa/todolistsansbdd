import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../state/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<ReadonlyArray<Task>>([]);
  tasks$: Observable<ReadonlyArray<Task>> = this.tasksSubject.asObservable();

  constructor() {}

  updateTasks(tasks: ReadonlyArray<Task>): void {
    console.log('Mise à jour des tâches dans TaskService : ', tasks);
    this.tasksSubject.next(tasks);
  }

}
