import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '../services/projects.service';

import { Project } from '../classes/project';
import { Task } from '../classes/task';

@Component({
	moduleId: module.id,
	selector: 'tasks-container',
	templateUrl: './tasks-container.component.html',
	styleUrls: ['./tasks-container.css']
})

export class TasksContainerComponent{
	@Input() project: Project;

	constructor(
		private projectsService: ProjectsService,
		private router: Router
	) { }

	goToEditTaskPage(project: Project, task: Task): void{
		this.router.navigate(['/editTask', project._id, task._id]);
	}

	removeTask(project: Project, task: Task): void{
		this.projectsService.removeTask(project._id, task._id)
			.then(task => {
				this.project.tasks = this.project.tasks.filter(taskItem => {
					return taskItem._id !== task._id;
				});
			});
	}

	prioritizeUp(project: Project, task: Task): void{
		this.projectsService.prioritizeUp(project._id, task._id, task)
			.then(taskRes => {
				let currentPriority = task.priority;
				if(currentPriority === 0) {
					return;
				}
				let targetPriority = currentPriority - 1;

				this.project.tasks = this.project.tasks.map(taskItem => {
					if(taskItem.priority === currentPriority) {
						taskItem.priority = targetPriority;
						return taskItem;
					} else if(taskItem.priority === targetPriority) {
						taskItem.priority = currentPriority;
						return taskItem;
					} else {
						return taskItem;
					}
				})

			})
	}

	prioritizeDown(project: Project, task: Task): void{
		this.projectsService.prioritizeDown(project._id, task._id, task)
			.then(taskRes => {
				let currentPriority = task.priority;
				let maxPriority = this.project.tasks.length - 1;
				if(currentPriority === maxPriority) {
					return;
				}
				let targetPriority = currentPriority + 1;

				this.project.tasks = this.project.tasks.map(taskItem => {
					if(taskItem.priority === currentPriority) {
						taskItem.priority = targetPriority;
						return taskItem;
					} else if(taskItem.priority === targetPriority) {
						taskItem.priority = currentPriority;
						return taskItem;
					} else {
						return taskItem;
					}
				})

			})
	}

	changeStatus(project: Project, task: Task): void{
		this.projectsService.changeStatus(project._id, task._id, {
			status: task.status
		});
	}
}