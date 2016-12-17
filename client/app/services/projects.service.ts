import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AuthService } from './auth.service'

import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

import { Project } from '../classes/project';
import { Task } from '../classes/task';

@Injectable()

export class ProjectsService {

	projects: Project[];
	private headers = new Headers({'Content-Type': 'application/json'});
	private headersAuth = new Headers({});

	constructor (private http: Http, private authService: AuthService) { }



	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}

	getAll(): Promise<Project[]> {
		const url = "/projects";
		let token = this.authService.getToken();
		this.headersAuth.delete('Authorization');
		this.headersAuth.append('Authorization', `Bearer ${token}`);
		return this.http
			.get(url, {headers: this.headersAuth, body: ''})
			.toPromise()
			.then(res => {
				if(!this.projects) {
					this.projects = [];
				}
				this.projects = _.cloneDeep(res.json());
				return this.projects;
			})
	}

	createProject(title: String): Promise<void> {
		const url = "/projects";
		let token = this.authService.getToken();
		this.headersAuth.append('Content-Type', 'application/json');
		this.headersAuth.append('Authorization', `Bearer ${token}`);
		return this.http
			.post(url, JSON.stringify({title: title}), {headers: this.headersAuth})
			.toPromise()
			.then(res => {
				if(!this.projects) {
					this.projects = [];
				}
				this.projects.push(res.json())
			})
			.catch(this.handleError);
	}	

	editProject(id: String, project: Object): Promise<void> {
		const url = `/projects/${id}/`;
		return this.http
			.post(url, JSON.stringify(project), {headers: this.headers})
			.toPromise()
			.then(res => {
				this.projects = this.projects.map((item) => {
					if(item._id === res._id) {
						return item = res;
					} else {
						return item;
					}
				});
			});
	}

	removeProject(id: String): Promise<void> {
		const url = `/projects/${id}`;
		return this.http
			.delete(url, {headers: this.headers, body: ''})
			.toPromise()
			.then((res) => {
				return res.json();
			});
	}

	createTask(id: String, task: Object): Promise<Task> {
		const url = `/projects/${id}/tasks`;
		return this.http
			.post(url, JSON.stringify(task), {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.json();
			})
	}

	editTask(idProject: String, idTask: String, task: Object): Promise<void> {
		const url = `/projects/${idProject}/tasks/${idTask}`;
		return this.http
			.post(url, JSON.stringify(task), {headers: this.headers})
			.toPromise()
			.then(res => {
				for(let i = 0; i < this.projects.length; i++) {
					if(this.projects[i]._id === idProject) {
						for(let j = 0; j < this.projects[i].tasks.length; j++) {
							if(this.projects[i].tasks[j]._id === idTask) {
								this.projects[i].tasks[j] = res.json();
							}
						}
					}
				}
			});
	}

	removeTask(idProject: String, idTask: String): Promise<Task> {
		const url = `/projects/${idProject}/tasks/${idTask}`;
		return this.http
			.delete(url, {headers: this.headers, body: ''})
			.toPromise()
			.then(res => {
				return res.json();
			})
	}

	prioritizeUp(idProject: String, idTask: String, task: Task): Promise<Task> {
		const url = `/projects/${idProject}/tasks/${idTask}/prioritizeUp`;
		return this.http
			.put(url, {headers: this.headers, body: ''})
			.toPromise()
			.then(res => {
				return res.json();
			})
	}

	prioritizeDown(idProject: String, idTask: String, task: Task): Promise<Task> {
		const url = `/projects/${idProject}/tasks/${idTask}/prioritizeDown`;
		return this.http
			.put(url, {headers: this.headers, body: ''})
			.toPromise()
			.then(res => {
				return res.json();
			})
	}

	changeStatus(idProject: String, idTask: String, status: Object): Promise<void> {
		const url = `/projects/${idProject}/tasks/${idTask}/changeStatus`;
		return this.http
			.post(url, JSON.stringify(status), {headers: this.headers})
			.toPromise()
			.then(res => {

			})
	}

}