import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { AddTaskInputComponent } from './add-task-input/add-task-input.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AuthSignupComponent } from './auth/auth-signup.component';
import { AuthSigninComponent } from './auth/auth-signin.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ProjectsService } from './services/projects.service';
import { AuthService } from './services/auth.service';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{ path: 'home', component: TodoListsComponent },
			{ path: 'newProject', component: NewProjectComponent },
			{ path: 'editProject/:id', component: EditProjectComponent },
			{ path: 'editTask/:idProject/:idTask', component: EditTaskComponent },
			{ path: 'signup', component: AuthSignupComponent },
			{ path: 'signin', component: AuthSigninComponent }
		])
	],
	declarations: [ 
		AppComponent,
		TodoListsComponent,
		NewProjectComponent,
		ProjectHeaderComponent,
		AddTaskInputComponent,
		TasksContainerComponent,
		EditProjectComponent,
		EditTaskComponent,
		AuthSignupComponent,
		AuthSigninComponent,
		NavigationComponent,
		OrderByPipe
	],
	providers: [
		ProjectsService,
		AuthService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }