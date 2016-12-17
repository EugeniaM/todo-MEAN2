import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';

@Component({
	moduleId: module.id,
	selector: 'new-project',
	templateUrl: './new-project.component.html',
	styleUrls: ['./new-project.css'],
	providers: [ProjectsService]
})

export class NewProjectComponent {
	projectTitle = "";

	constructor (
		private router: Router,
		private projectsService: ProjectsService
	) { }

	addNewProject(): void {
		if(!this.projectTitle) return;
		this.projectsService.createProject(this.projectTitle).then(() => {
			this.projectTitle = "";
			this.router.navigate(['/home']);
		});
	}

	cancel(): void {
		this.projectTitle = "";
		this.router.navigate(['/home']);
	}
}