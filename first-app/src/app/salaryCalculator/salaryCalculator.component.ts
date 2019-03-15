import { Component, ViewEncapsulation } from '@angular/core';

import { SalaryCalculatorModel } from './SalaryCalculatorModel';

@Component({
	selector : 'app-salary-calculator',
	templateUrl : 'salaryCalculator.component.html',
	styleUrls : ['salaryCalculator.component.css'],
	encapsulation : ViewEncapsulation.None,
	providers: [
	    SalaryCalculatorModel
	  ]
})
export class SalaryCalculatorComponent{

	/*model : SalaryCalculatorModel;

	constructor(_model : SalaryCalculatorModel){
		this.model = _model;
	}*/

	constructor(private model : SalaryCalculatorModel){
		
	}
}