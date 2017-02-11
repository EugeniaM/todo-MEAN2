import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'todo-app',
	templateUrl: '../app/app.html',
	styleUrls: ['../app/app.css']
})

export class AppComponent {

	title = "SIMPLE TODO LISTS";
	subtitle = "FROM RUBY GARAGE";
	private url = "/test";

	constructor(private http: Http) { }

	test(): Promise<any> {
		console.log("Worked!!!");
		return this.http.get(this.url)
			.toPromise()
			.then(response => console.log(response.json()));
	}
}