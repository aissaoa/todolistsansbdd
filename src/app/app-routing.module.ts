import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShoppingComponent} from './features/shopping/shopping.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'shopping', component: ShoppingComponent },  
  // { path: 'list', component: ShoppingListComponent }, 
  // { path: 'todolist', component: ToDoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }