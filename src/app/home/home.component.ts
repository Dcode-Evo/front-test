import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { BasketService } from './../basket.service';
import { PizzaService } from './../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public counter = 0;
  public totalPrice = 0;
  public pizzaList: Pizza[] = [];
  public pizzaOrdered: Pizza[] = [];
  public openOrderSummary = false;

  constructor(
    private pizzaService: PizzaService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.pizzaList = this.pizzaService.get();
    this.pizzaService.updatePizzasOrdered.subscribe((pizzaOrdered: Pizza[]) => this.pizzaOrdered = pizzaOrdered);
  }

  /**
   * Update header counter
   * @param isIncrementing: boolean
   */
  public updateCounter(isIncrementing: boolean): void {
    /* You should check if the value is incrementing or not and
    change the value of the counter depending of the value of the boolean
    */
    isIncrementing ? this.counter += 1 : this.counter -= 1;
  }

  /**
   * Reset pizza counter, basket and totalAmount.
   */
  public resetAll(): void {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    this.pizzaService.reset();
    // Then, don't forget to also reset the counter
    this.resetCounter();
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    this.basketService.resetBasket();
  }

  /**
   * Open modal to display order summary
   */
  public buyNow(): void {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */
    this.basketService.update.subscribe((totalAmount: number) => this.totalPrice = totalAmount);
    if (this.totalPrice > 0 && this.totalPrice <= 200) {
      this.openOrderSummary = true;
    }
  }

  /**
   * Reset Counter to default value: 0
   */
  private resetCounter(): void {
    this.counter = 0;
  }
}
