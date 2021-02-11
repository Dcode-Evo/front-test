import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pizza } from './pizza';
import { PIZZAS } from './pizzasList';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  public pizzaList: Pizza[];
  @Output() updatePizzasOrdered: EventEmitter<Pizza[]> = new EventEmitter();

  constructor() {
    this.pizzaList = PIZZAS;
  }

  public get(): Pizza[] {
    return this.pizzaList;
  }

  public update(): void {
    const pizzaOrdered = this.pizzaList.filter((pizza: Pizza) => pizza.numberOrdered > 0);
    this.updatePizzasOrdered.emit(pizzaOrdered);
  }

  public reset(): void {
    this.pizzaList.map(pizza => {
      pizza.numberOrdered = 0;
      pizza.totalAmountProduct = 0;
      return pizza;
    });
    this.updatePizzasOrdered.emit([]);
  }
}
