import { Component, Input } from '@angular/core';

import { ProjectsService } from '../services/projects.service';

import { Project } from '../classes/project';

@Component({
	moduleId: module.id,
	selector: 'add-task-input',
	templateUrl: './add-task-input.component.html',
	styleUrls: ['./add-task-input.css']
})

export class AddTaskInputComponent {
	@Input() project: Project;
	@Input() index;

	newTask = {
		body: []
	};

	constructor(
		private projectsService: ProjectsService
	) { }

	addNewTask(event, project: Project): void {
		event.preventDefault();
		let foundIndex = this.projectsService.projects.indexOf(project);
		if(!this.newTask.body[foundIndex] || this.newTask.body[foundIndex] === "") return;

		this.projectsService.createTask(project._id, {
			body: this.newTask.body[foundIndex],
			priority: project.tasks.length
		}).then((task) => {
			this.projectsService.projects[foundIndex].tasks.push(task);
			this.newTask.body[foundIndex] = '';
		});
	}
}