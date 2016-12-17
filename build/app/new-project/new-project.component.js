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
var NewProjectComponent = (function () {
    function NewProjectComponent(router, projectsService) {
        this.router = router;
        this.projectsService = projectsService;
        this.projectTitle = "";
    }
    NewProjectComponent.prototype.addNewProject = function () {
        var _this = this;
        if (!this.projectTitle)
            return;
        this.projectsService.createProject(this.projectTitle).then(function () {
            _this.projectTitle = "";
            _this.router.navigate(['/home']);
        });
    };
    NewProjectComponent.prototype.cancel = function () {
        this.projectTitle = "";
        this.router.navigate(['/home']);
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-project',
            templateUrl: './new-project.component.html',
            styleUrls: ['./new-project.css'],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, projects_service_1.ProjectsService])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVUvRDtJQUdDLDZCQUNTLE1BQWMsRUFDZCxlQUFnQztRQURoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBS2QsQ0FBQztJQUVMLDJDQUFhLEdBQWI7UUFBQSxpQkFNQztRQUxBLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUEzQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM1QixDQUFDOzsyQkFBQTtJQXNCRiwwQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksMkJBQW1CLHNCQW9CL0IsQ0FBQSIsImZpbGUiOiJhcHAvbmV3LXByb2plY3QvbmV3LXByb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICduZXctcHJvamVjdCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL25ldy1wcm9qZWN0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9uZXctcHJvamVjdC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtQcm9qZWN0c1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3UHJvamVjdENvbXBvbmVudCB7XHJcblx0cHJvamVjdFRpdGxlID0gXCJcIjtcclxuXHJcblx0Y29uc3RydWN0b3IgKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgcHJvamVjdHNTZXJ2aWNlOiBQcm9qZWN0c1NlcnZpY2VcclxuXHQpIHsgfVxyXG5cclxuXHRhZGROZXdQcm9qZWN0KCk6IHZvaWQge1xyXG5cdFx0aWYoIXRoaXMucHJvamVjdFRpdGxlKSByZXR1cm47XHJcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5jcmVhdGVQcm9qZWN0KHRoaXMucHJvamVjdFRpdGxlKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5wcm9qZWN0VGl0bGUgPSBcIlwiO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjYW5jZWwoKTogdm9pZCB7XHJcblx0XHR0aGlzLnByb2plY3RUaXRsZSA9IFwiXCI7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG5cdH1cclxufSJdfQ==
