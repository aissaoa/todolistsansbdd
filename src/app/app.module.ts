
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';

import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/reducers/task.reducer';


import { NgModule } from '@angular/core';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { ShoppingTasksComponent } from './features/shopping-tasks/shopping-tasks.component';
import { TodolistComponent } from './features/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingComponent,
    ShoppingTasksComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ tasks: taskReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }