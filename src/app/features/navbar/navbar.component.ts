import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { map, Observable, tap } from "rxjs";
import { Task } from "src/app/state/models/task.model";
import { selectNumberOfTasks } from "src/app/state/selectors/task.selector";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  numberOfTasks$: Observable<number>;

  constructor(private store: Store<{ tasks: ReadonlyArray<Task> }>) {
    this.numberOfTasks$ = this.store.pipe(select(selectNumberOfTasks));
  }

  isMobileMenuOpen: boolean = false;


 

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}