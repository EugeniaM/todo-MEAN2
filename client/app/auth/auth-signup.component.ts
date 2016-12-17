import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { User } from '../classes/user';

@Component({
	moduleId: module.id,
	selector: 'auth-signup',
	templateUrl: './auth-signup.component.html',
	styleUrls: ['./auth-signup.css']
})

export class AuthSignupComponent implements OnInit {
	user: User = {
		username: '',
		password: ''
	};
	error: any = "";

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit(): void{
		if(this.authService.isLoggedIn()) {
			this.router.navigate(['/home']);
		}
	}

	signup(event): void{
		event.preventDefault();
		this.authService.signup(this.user)
			.then(() => {
				this.router.navigate(['/home']);
			},
			(err) => {
				var resError = err.json();
				this.error = resError;
			})
	}

	cancel(): void{
		this.router.navigate(['/home']);
	}
}