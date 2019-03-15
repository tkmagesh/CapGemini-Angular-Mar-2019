export class SalaryCalculatorModel{
	basic = 0;
	hra = 0;
	da = 0;
	tax = 0;
	salary = 0;

	calculate(){
		let gross = this.basic + this.hra + this.da;
		let net = gross * ((100-this.tax)/100);
		this.salary = net;
	}
}