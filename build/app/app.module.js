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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0JBQStCLGdCQUFnQixDQUFDLENBQUE7QUFDaEQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXZELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHFDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLHNDQUFvQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzFFLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHlDQUFzQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2xGLDBDQUF3Qyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ3RGLHVDQUFxQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzdFLG9DQUFrQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3BFLHNDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHNDQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHFDQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXhFLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELDhCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBc0NwRDtJQUFBO0lBQXlCLENBQUM7SUFwQzFCO1FBQUMsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLHFCQUFZLENBQUMsT0FBTyxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO29CQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO29CQUMvQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO29CQUN0RCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7b0JBQzVELEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtvQkFDckUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtvQkFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtpQkFDbEQsQ0FBQzthQUNGO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLDRCQUFZO2dCQUNaLHlDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQixpREFBc0I7Z0JBQ3RCLGdEQUFxQjtnQkFDckIsbURBQXVCO2dCQUN2Qiw2Q0FBb0I7Z0JBQ3BCLHVDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLDBDQUFtQjtnQkFDbkIsMkJBQVc7YUFDWDtZQUNELFNBQVMsRUFBRTtnQkFDVixrQ0FBZTtnQkFDZiwwQkFBVzthQUNYO1lBQ0QsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUMzQixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RvTGlzdHNDb21wb25lbnQgfSBmcm9tICcuL3RvZG8tbGlzdHMvdG9kby1saXN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmV3UHJvamVjdENvbXBvbmVudCB9IGZyb20gJy4vbmV3LXByb2plY3QvbmV3LXByb2plY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QtaGVhZGVyL3Byb2plY3QtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRUYXNrSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2FkZC10YXNrLWlucHV0L2FkZC10YXNrLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrc0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGFza3MtY29udGFpbmVyL3Rhc2tzLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdFByb2plY3RDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtcHJvamVjdC9lZGl0LXByb2plY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRUYXNrQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGgtc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGgtc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJCeVBpcGUgfSBmcm9tICcuL3BpcGVzL29yZGVyLWJ5LnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbIFxuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0SHR0cE1vZHVsZSxcblx0XHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG5cdFx0XHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuXHRcdFx0eyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogVG9kb0xpc3RzQ29tcG9uZW50IH0sXG5cdFx0XHR7IHBhdGg6ICduZXdQcm9qZWN0JywgY29tcG9uZW50OiBOZXdQcm9qZWN0Q29tcG9uZW50IH0sXG5cdFx0XHR7IHBhdGg6ICdlZGl0UHJvamVjdC86aWQnLCBjb21wb25lbnQ6IEVkaXRQcm9qZWN0Q29tcG9uZW50IH0sXG5cdFx0XHR7IHBhdGg6ICdlZGl0VGFzay86aWRQcm9qZWN0LzppZFRhc2snLCBjb21wb25lbnQ6IEVkaXRUYXNrQ29tcG9uZW50IH0sXG5cdFx0XHR7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IEF1dGhTaWdudXBDb21wb25lbnQgfSxcblx0XHRcdHsgcGF0aDogJ3NpZ25pbicsIGNvbXBvbmVudDogQXV0aFNpZ25pbkNvbXBvbmVudCB9XG5cdFx0XSlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbIFxuXHRcdEFwcENvbXBvbmVudCxcblx0XHRUb2RvTGlzdHNDb21wb25lbnQsXG5cdFx0TmV3UHJvamVjdENvbXBvbmVudCxcblx0XHRQcm9qZWN0SGVhZGVyQ29tcG9uZW50LFxuXHRcdEFkZFRhc2tJbnB1dENvbXBvbmVudCxcblx0XHRUYXNrc0NvbnRhaW5lckNvbXBvbmVudCxcblx0XHRFZGl0UHJvamVjdENvbXBvbmVudCxcblx0XHRFZGl0VGFza0NvbXBvbmVudCxcblx0XHRBdXRoU2lnbnVwQ29tcG9uZW50LFxuXHRcdEF1dGhTaWduaW5Db21wb25lbnQsXG5cdFx0TmF2aWdhdGlvbkNvbXBvbmVudCxcblx0XHRPcmRlckJ5UGlwZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRQcm9qZWN0c1NlcnZpY2UsXG5cdFx0QXV0aFNlcnZpY2Vcblx0XSxcblx0Ym9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==
