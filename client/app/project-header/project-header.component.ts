import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { ProjectsService } from '../services/projects.service';

import { Project } from '../classes/project';

@Component({
	moduleId: module.id,
	selector: 'project-header',
	templateUrl: './project-header.component.html',
	styleUrls: ['./project-header.css'],
	providers: [ProjectsService]
})

export class ProjectHeaderComponent {

	@Input() project;
	@Input() projects;

	@Output() projectsChange = new EventEmitter();

	constructor (
		private projectsService: ProjectsService,
		private router: Router
	) { }

	goToEditProjectPage(project: Project): void{
		this.router.navigate(['/editProject', project._id]);
	}

	removeProject(project: Project): void{
		this.projectsService.removeProject(project._id).then(res => {
			this.projects = this.projects.filter(item => {
				return item._id !== res._id;
			});
			this.projectsChange.emit(this.projects);
		})
	}
}