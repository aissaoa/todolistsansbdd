import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  isTaskSelected: boolean = true;
  isShoppingSelected: boolean = false;

  selectTask(): void {
    this.isTaskSelected = true;
    this.isShoppingSelected = false;
  }

  selectShopping(): void {
    this.isShoppingSelected = true;
    this.isTaskSelected = false;
  }

}
