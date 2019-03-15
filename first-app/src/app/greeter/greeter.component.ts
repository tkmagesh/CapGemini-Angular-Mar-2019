import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{

	greetMessage : string = '[Default greet message]';

	onGreetClick(userName : string){
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}

}