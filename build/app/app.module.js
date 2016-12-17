"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var todo_lists_component_1 = require('./todo-lists/todo-lists.component');
var new_project_component_1 = require('./new-project/new-project.component');
var project_header_component_1 = require('./project-header/project-header.component');
var add_task_input_component_1 = require('./add-task-input/add-task-input.component');
var tasks_container_component_1 = require('./tasks-container/tasks-container.component');
var edit_project_component_1 = require('./edit-project/edit-project.component');
var edit_task_component_1 = require('./edit-task/edit-task.component');
var auth_signup_component_1 = require('./auth/auth-signup.component');
var auth_signin_component_1 = require('./auth/auth-signin.component');
var navigation_component_1 = require('./navigation/navigation.component');
var projects_service_1 = require('./services/projects.service');
var auth_service_1 = require('./services/auth.service');
var order_by_pipe_1 = require('./pipes/order-by.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: todo_lists_component_1.TodoListsComponent },
                    { path: 'newProject', component: new_project_component_1.NewProjectComponent },
                    { path: 'editProject/:id', component: edit_project_component_1.EditProjectComponent },
                    { path: 'editTask/:idProject/:idTask', component: edit_task_component_1.EditTaskComponent },
                    { path: 'signup', component: auth_signup_component_1.AuthSignupComponent },
                    { path: 'signin', component: auth_signin_component_1.AuthSigninComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                todo_lists_component_1.TodoListsComponent,
                new_project_component_1.NewProjectComponent,
                project_header_component_1.ProjectHeaderComponent,
                add_task_input_component_1.AddTaskInputComponent,
                tasks_container_component_1.TasksContainerComponent,
                edit_project_component_1.EditProjectComponent,
                edit_task_component_1.EditTaskComponent,
                auth_signup_component_1.AuthSignupComponent,
                auth_signin_component_1.AuthSigninComponent,
                navigation_component_1.NavigationComponent,
                order_by_pipe_1.OrderByPipe
            ],
            providers: [
                projects_service_1.ProjectsService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQStCLGdCQUFnQixDQUFDLENBQUE7QUFDaEQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHFDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLHNDQUFvQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzFFLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHlDQUFzQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2xGLDBDQUF3Qyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3RGLHVDQUFxQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzdFLG9DQUFrQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3BFLHNDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHNDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHFDQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXhFLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELDhCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBc0NwRDtJQUFBO0lBQXlCLENBQUM7SUFwQzFCO1FBQUMsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLHFCQUFZLENBQUMsT0FBTyxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO29CQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO29CQUMvQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO29CQUN0RCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7b0JBQzVELEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtvQkFDckUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtvQkFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtpQkFDbEQsQ0FBQzthQUNGO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLDRCQUFZO2dCQUNaLHlDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQixpREFBc0I7Z0JBQ3RCLGdEQUFxQjtnQkFDckIsbURBQXVCO2dCQUN2Qiw2Q0FBb0I7Z0JBQ3BCLHVDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLDBDQUFtQjtnQkFDbkIsMkJBQVc7YUFDWDtZQUNELFNBQVMsRUFBRTtnQkFDVixrQ0FBZTtnQkFDZiwwQkFBVzthQUNYO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUMzQixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvZG9MaXN0c0NvbXBvbmVudCB9IGZyb20gJy4vdG9kby1saXN0cy90b2RvLWxpc3RzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ld1Byb2plY3RDb21wb25lbnQgfSBmcm9tICcuL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2plY3RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QtaGVhZGVyL3Byb2plY3QtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZFRhc2tJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vYWRkLXRhc2staW5wdXQvYWRkLXRhc2staW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFza3NDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rhc2tzLWNvbnRhaW5lci90YXNrcy1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdFByb2plY3RDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtcHJvamVjdC9lZGl0LXByb2plY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdFRhc2tDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtdGFzay9lZGl0LXRhc2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLXNpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGgtc2lnbmluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE9yZGVyQnlQaXBlIH0gZnJvbSAnLi9waXBlcy9vcmRlci1ieS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogWyBcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcblx0XHRcdHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcblx0XHRcdHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IFRvZG9MaXN0c0NvbXBvbmVudCB9LFxyXG5cdFx0XHR7IHBhdGg6ICduZXdQcm9qZWN0JywgY29tcG9uZW50OiBOZXdQcm9qZWN0Q29tcG9uZW50IH0sXHJcblx0XHRcdHsgcGF0aDogJ2VkaXRQcm9qZWN0LzppZCcsIGNvbXBvbmVudDogRWRpdFByb2plY3RDb21wb25lbnQgfSxcclxuXHRcdFx0eyBwYXRoOiAnZWRpdFRhc2svOmlkUHJvamVjdC86aWRUYXNrJywgY29tcG9uZW50OiBFZGl0VGFza0NvbXBvbmVudCB9LFxyXG5cdFx0XHR7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IEF1dGhTaWdudXBDb21wb25lbnQgfSxcclxuXHRcdFx0eyBwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBBdXRoU2lnbmluQ29tcG9uZW50IH1cclxuXHRcdF0pXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFsgXHJcblx0XHRBcHBDb21wb25lbnQsXHJcblx0XHRUb2RvTGlzdHNDb21wb25lbnQsXHJcblx0XHROZXdQcm9qZWN0Q29tcG9uZW50LFxyXG5cdFx0UHJvamVjdEhlYWRlckNvbXBvbmVudCxcclxuXHRcdEFkZFRhc2tJbnB1dENvbXBvbmVudCxcclxuXHRcdFRhc2tzQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RWRpdFByb2plY3RDb21wb25lbnQsXHJcblx0XHRFZGl0VGFza0NvbXBvbmVudCxcclxuXHRcdEF1dGhTaWdudXBDb21wb25lbnQsXHJcblx0XHRBdXRoU2lnbmluQ29tcG9uZW50LFxyXG5cdFx0TmF2aWdhdGlvbkNvbXBvbmVudCxcclxuXHRcdE9yZGVyQnlQaXBlXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFByb2plY3RzU2VydmljZSxcclxuXHRcdEF1dGhTZXJ2aWNlXHJcblx0XSxcclxuXHRib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19
