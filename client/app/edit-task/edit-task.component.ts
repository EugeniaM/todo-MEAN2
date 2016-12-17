import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsService } from '../services/projects.service';

import { Project } from '../classes/project';
import { Task } from '../classes/task';

@Component({
	moduleId: module.id,
	selector: 'edit-task',
	templateUrl: './edit-task.component.html',
	styleUrls: ['../new-project/new-project.css']
})

export class EditTaskComponent implements OnInit {

	project: Project;
	task: Task;
	taskBody: String;
	idProject: String;
	idTask: String;

	constructor(
		private projectsService: ProjectsService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
	) { }

	ngOnInit(): void {
		this.idProject = this.route.snapshot.params['idProject'];
		this.idTask = this.route.snapshot.params['idTask'];

		this.project = this.projectsService.projects.filter(project => {
			return project._id === this.idProject;
		})[0];

		this.task = this.project.tasks.filter(task => {
			return task._id === this.idTask;
		})[0];

		this.taskBody = this.task.body;
	}

	editTask(): void{
		if(!this.taskBody || this.taskBody === '') return;
		this.projectsService.editTask(this.idProject, this.idTask, { body: this.taskBody })
			.then(() => {
				this.taskBody = '';
				this.router.navigate(['/home']);
			})
	}

	cancel(): void{
		this.location.back();
	}
}