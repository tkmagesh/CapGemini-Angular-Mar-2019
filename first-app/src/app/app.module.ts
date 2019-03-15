import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';
import { SalaryCalculatorResultComponent } from './salaryCalculator/salaryCalculatorResult.component';
import { ProductsComponent } from './products/products.component';

import { SalaryCalculatorModel } from './salaryCalculator/SalaryCalculatorModel';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
    , SalaryCalculatorResultComponent
    , ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
