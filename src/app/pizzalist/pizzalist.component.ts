import { PizzaService } from './../pizza.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { PIZZAS } from '../pizzasList';
import { BasketService } from '../basket.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {

  @Input() pizzas: Pizza[] = [];
  @Output() isAdded = new EventEmitter<boolean>();

  constructor(private basketService: BasketService) { }

  ngOnInit() { }

  /**
   *  Update list with last pizza added or removed
   *
   * @param pizza : Pizza
   * @param addedToTotal : boolean
   */
  private updateList(pizza: Pizza, addedToTotal: boolean): void {
    this.basketService.addToTotalAmount(pizza.price, addedToTotal);
    this.isAdded.emit(addedToTotal);
  }

  /**
   * Decrement pizza number and price to list
   *
   * @param pizza : Pizza
   */
  public decrementNumber(pizza: Pizza): void {
    if (pizza.numberOrdered > 0) {
      // Decrement the number of the ordered pizza
      pizza.numberOrdered -= 1;
      // the total amount of the selected pizza should be reduced as well
      pizza.totalAmountProduct -= pizza.price;
      // call the update list
      this.updateList(pizza, false);
    }
  }

  /**
   * Increment pizza number and price to list
   *
   * @param pizza : Pizza
   */
  public incrementNumber(pizza: Pizza): void {
    // Increment the number of the ordered pizza
    pizza.numberOrdered += 1;
    // the total amount of the selected pizza should be augmented as well
    pizza.totalAmountProduct += pizza.price;
    // call the update list
    this.updateList(pizza, true);
  }
}
