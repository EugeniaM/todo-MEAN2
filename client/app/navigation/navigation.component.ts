import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'nav-header',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.css']
})

export class NavigationComponent {

	constructor(
		private authService: AuthService
	) { }

	isLoggedIn = this.authService.isLoggedIn;
	currentUser = this.authService.currentUser;
	logout = this.authService.logout;
}