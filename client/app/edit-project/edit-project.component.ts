import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Project } from '../classes/project';
import { ProjectsService } from '../services/projects.service';

@Component({
	moduleId: module.id,
	selector: 'edit-project',
	templateUrl: './edit-project.component.html',
	styleUrls: ['../new-project/new-project.css']
})

export class EditProjectComponent implements OnInit{

	project: Project;
	projectTitle: String;
	id: String;

	constructor(
		private projectsService: ProjectsService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
	) { }

	ngOnInit(): void{
		this.id = this.route.snapshot.params['id'];
		this.project = this.projectsService.projects.filter((value) => {
			return value._id === this.id;
		})[0];
		this.projectTitle = this.project.title;
	}

	editProject(): void{
		if(!this.projectTitle || this.projectTitle === '') return;

		this.projectsService.editProject(this.id, {
			title: this.projectTitle
		}).then(() => {
			this.projectTitle = '';
			this.router.navigate(['/home']);
		});
	}

	cancel(): void{
		this.location.back();
	}
}