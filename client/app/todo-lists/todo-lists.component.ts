import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';
import { AuthService } from '../services/auth.service';

import { Project } from '../classes/project';

@Component({
	moduleId: module.id,
	selector: 'todo-lists',
	templateUrl: './todo-lists.component.html',
	styleUrls: ['./todo-lists.css']
})

export class TodoListsComponent implements OnInit {

	projects: Project[];

	constructor (
		private router: Router,
		private projectsService: ProjectsService,
		private authService: AuthService
	) { }

	isLoggedIn = this.authService.isLoggedIn;

	ngOnInit(): void {
		if(!this.isLoggedIn()) {
			return;
		}
		this.projectsService.getAll().then(() => {
			this.projects = this.projectsService.projects;
		})
	}

	goToAddProject(): void {
		this.router.navigate(['/newProject']);
	}
}