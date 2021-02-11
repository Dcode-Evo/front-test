import { BasketService } from './basket.service';
import { BasketComponent } from './basket/basket.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { PizzaService } from './pizza.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzalistComponent,
    HeaderComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [

  ],
  providers: [
    PizzaService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
