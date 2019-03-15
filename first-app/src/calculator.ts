class Calculator{
	public result : number = 0;

	add(x : number,y : number){
		this.result = x + y;
	}

}


export default new Calculator();