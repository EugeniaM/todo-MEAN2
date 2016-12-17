import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: TodoListsComponent },
	{ path: 'newProject', component: NewProjectComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}