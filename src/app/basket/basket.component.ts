import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public amount = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    // With the subscribe, you can catch
    // the value of the variable emitted in the services
    /* Here you should subscribe to the update emitter to catch
      its value and pass it to the amount variable so you can display it in the basket.
    */
    this.basketService.update.subscribe((value: number) => this.amount = value);
  }
}
