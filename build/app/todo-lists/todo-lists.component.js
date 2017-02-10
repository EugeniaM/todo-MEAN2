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
var router_1 = require('@angular/router');
var projects_service_1 = require('../services/projects.service');
var auth_service_1 = require('../services/auth.service');
var TodoListsComponent = (function () {
    function TodoListsComponent(router, projectsService, authService) {
        this.router = router;
        this.projectsService = projectsService;
        this.authService = authService;
        this.isLoggedIn = this.authService.isLoggedIn;
    }
    TodoListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isLoggedIn()) {
            return;
        }
        this.projectsService.getAll().then(function () {
            _this.projects = _this.projectsService.projects;
        });
    };
    TodoListsComponent.prototype.goToAddProject = function () {
        this.router.navigate(['/newProject']);
    };
    TodoListsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-lists',
            templateUrl: './todo-lists.component.html',
            styleUrls: ['./todo-lists.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, projects_service_1.ProjectsService, auth_service_1.AuthService])
    ], TodoListsComponent);
    return TodoListsComponent;
}());
exports.TodoListsComponent = TodoListsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b2RvLWxpc3RzL3RvZG8tbGlzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsaUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUFDL0QsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFXdkQ7SUFJQyw0QkFDUyxNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsV0FBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdqQyxlQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFGckMsQ0FBQztJQUlMLHFDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUM7UUFDUixDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDL0IsQ0FBQzs7MEJBQUE7SUEwQkYseUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDBCQUFrQixxQkF3QjlCLENBQUEiLCJmaWxlIjoiYXBwL3RvZG8tbGlzdHMvdG9kby1saXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd0b2RvLWxpc3RzJyxcblx0dGVtcGxhdGVVcmw6ICcuL3RvZG8tbGlzdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90b2RvLWxpc3RzLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwcm9qZWN0czogUHJvamVjdFtdO1xuXG5cdGNvbnN0cnVjdG9yIChcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcHJvamVjdHNTZXJ2aWNlOiBQcm9qZWN0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2Vcblx0KSB7IH1cblxuXHRpc0xvZ2dlZEluID0gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdGlmKCF0aGlzLmlzTG9nZ2VkSW4oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5nZXRBbGwoKS50aGVuKCgpID0+IHtcblx0XHRcdHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzU2VydmljZS5wcm9qZWN0cztcblx0XHR9KVxuXHR9XG5cblx0Z29Ub0FkZFByb2plY3QoKTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbmV3UHJvamVjdCddKTtcblx0fVxufSJdfQ==
