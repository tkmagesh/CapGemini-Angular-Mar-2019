import { Component, Input } from '@angular/core';


@Component({
	selector : 'app-salary-calculator-result',
	template : `
		<div class="field">
			<table>
				<tbody>
					<tr>
						<td id="tdBasic">{{data.basic}}</td>
						<td id="tdHra">{{data.hra}}</td>
						<td id="tdDa">{{data.da}}</td>
						<td id="tdTax">{{data.tax}}</td>
						<td id="tdSalary" [ngClass]="{poorSalary : data.basic < 10000, goodSalary : data.basic >= 10000 }">
							{{data.salary}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	`
})
export class SalaryCalculatorResultComponent{

	@Input()
	data = null;
}