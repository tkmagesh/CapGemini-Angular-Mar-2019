import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
