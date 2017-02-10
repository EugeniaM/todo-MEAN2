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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVUvRDtJQUdDLDZCQUNTLE1BQWMsRUFDZCxlQUFnQztRQURoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnpDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBS2QsQ0FBQztJQUVMLDJDQUFhLEdBQWI7UUFBQSxpQkFNQztRQUxBLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUEzQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM1QixDQUFDOzsyQkFBQTtJQXNCRiwwQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksMkJBQW1CLHNCQW9CL0IsQ0FBQSIsImZpbGUiOiJhcHAvbmV3LXByb2plY3QvbmV3LXByb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQcm9qZWN0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbmV3LXByb2plY3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmV3LXByb2plY3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZXctcHJvamVjdC5jc3MnXSxcblx0cHJvdmlkZXJzOiBbUHJvamVjdHNTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIE5ld1Byb2plY3RDb21wb25lbnQge1xuXHRwcm9qZWN0VGl0bGUgPSBcIlwiO1xuXG5cdGNvbnN0cnVjdG9yIChcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcHJvamVjdHNTZXJ2aWNlOiBQcm9qZWN0c1NlcnZpY2Vcblx0KSB7IH1cblxuXHRhZGROZXdQcm9qZWN0KCk6IHZvaWQge1xuXHRcdGlmKCF0aGlzLnByb2plY3RUaXRsZSkgcmV0dXJuO1xuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLmNyZWF0ZVByb2plY3QodGhpcy5wcm9qZWN0VGl0bGUpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9qZWN0VGl0bGUgPSBcIlwiO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcblx0XHR9KTtcblx0fVxuXG5cdGNhbmNlbCgpOiB2b2lkIHtcblx0XHR0aGlzLnByb2plY3RUaXRsZSA9IFwiXCI7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcblx0fVxufSJdfQ==
