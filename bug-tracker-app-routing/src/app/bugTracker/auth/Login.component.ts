import { Component } from '@angular/core';
import { UserService } from './UserService';
import { Router } from '@angular/router';
@Component({
	selector : 'app-login',
	template : `
		<h1>Login</h1>
		<input type="button" value="Login" (click)="onBtnLoginClick()"/>
	`
})
export class LoginComponent{
	constructor(private router: Router, private userService : UserService){

	}
	onBtnLoginClick(){
		this.userService.login();
		this.router.navigate(['/bugs', ]);
	}
}