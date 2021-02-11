import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public totalAmount = 0;
  @Output() update: EventEmitter<number> = new EventEmitter();

  constructor() {}

  public addToTotalAmount(currentProduct: number, isIncrementing: boolean): void {
    // This function is supposed to display the total price of every pizza ordered.
    /*
    if it is incrementing, the current product value should be added to the total amount
    else, the value should be retrieved from the total amount
    Then, use the emitter to emit the value of the totalAmount
     */
    isIncrementing ? this.totalAmount += currentProduct : this.totalAmount -= currentProduct;
    this.emitTotalAmountUpdated();
  }

  public resetBasket(): void {
    // Here, just set the value of the amount to 0
    this.totalAmount = 0;
    // Don't forget to emit the amount
    this.emitTotalAmountUpdated();
  }

  private emitTotalAmountUpdated(): void {
    this.update.emit(this.totalAmount);
  }
}
