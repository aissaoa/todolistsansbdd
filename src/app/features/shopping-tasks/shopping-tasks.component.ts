import { Component } from '@angular/core';

export interface ShoppingList {
  name: string;
  amount: number;
  unit: string;
  bought: boolean;
}

@Component({
  selector: 'app-shopping-tasks',
  templateUrl: './shopping-tasks.component.html',
  styleUrls: ['./shopping-tasks.component.css']
})
export class ShoppingTasksComponent {

  shops: ShoppingList[] = [
    { name: 'Pommes', amount: 5, unit: 'kg', bought: false },
    { name: 'Poires', amount: 2, unit: 'kg', bought: false },
    { name: 'Pain', amount: 1, unit: 'unité', bought: false },
    { name: 'Lait', amount: 1, unit: 'L', bought: false },
    { name: 'Beurre', amount: 250, unit: 'g', bought: false }
  ];

  onShoppingChange(shop: ShoppingList): void {
    shop.bought = !shop.bought;
  }


}

