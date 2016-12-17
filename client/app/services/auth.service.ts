import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../classes/user';

@Injectable()

export class AuthService {
	
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor( private http: Http	) { }

	saveToken(token: Object): void{
		localStorage['todos-app-token-angular2'] = token;
	};

	getToken(): void{
		return localStorage['todos-app-token-angular2'];
	}

	isLoggedIn(): boolean{
		let token = localStorage['todos-app-token-angular2'];

		if(token) {
			let payload = JSON.parse(atob(token.split('.')[1]));

			return payload.exp > Date.now() / 1000;
		} else {
			return false;
		}
	};

	currentUser(): void{
		if(this.isLoggedIn()) {
			let token = localStorage['todos-app-token-angular2'];
			let payload = JSON.parse(atob(token.split('.')[1]));

			return payload.username;
		}
	};

	signup(user: User): Promise<any> {
		const url = '/signup';
		return this.http
			.post(url, JSON.stringify(user), {headers: this.headers})
			.toPromise()
			.then(res => {
				let data = res.json();
				this.saveToken(data.token);
			});
	};

	login(user: User): Promise<any> {
		const url = '/login';
		return this.http
			.post(url, JSON.stringify(user), {headers: this.headers})
			.toPromise()
			.then(res => {
				let data = res.json();
				this.saveToken(data.token);
			});
	};

	logout(): void{
		localStorage.removeItem('todos-app-token-angular2');
	};
}