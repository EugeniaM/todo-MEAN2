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
var ProjectHeaderComponent = (function () {
    function ProjectHeaderComponent(projectsService, router) {
        this.projectsService = projectsService;
        this.router = router;
        this.projectsChange = new core_1.EventEmitter();
    }
    ProjectHeaderComponent.prototype.goToEditProjectPage = function (project) {
        this.router.navigate(['/editProject', project._id]);
    };
    ProjectHeaderComponent.prototype.removeProject = function (project) {
        var _this = this;
        this.projectsService.removeProject(project._id).then(function (res) {
            _this.projects = _this.projects.filter(function (item) {
                return item._id !== res._id;
            });
            _this.projectsChange.emit(_this.projects);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectHeaderComponent.prototype, "project", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectHeaderComponent.prototype, "projects", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProjectHeaderComponent.prototype, "projectsChange", void 0);
    ProjectHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-header',
            templateUrl: './project-header.component.html',
            styleUrls: ['./project-header.css'],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.Router])
    ], ProjectHeaderComponent);
    return ProjectHeaderComponent;
}());
exports.ProjectHeaderComponent = ProjectHeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0LWhlYWRlci9wcm9qZWN0LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVkvRDtJQU9DLGdDQUNTLGVBQWdDLEVBQ2hDLE1BQWM7UUFEZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpiLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFLMUMsQ0FBQztJQUVMLG9EQUFtQixHQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLE9BQWdCO1FBQTlCLGlCQU9DO1FBTkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBckJEO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOztrRUFBQTtJQWJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM1QixDQUFDOzs4QkFBQTtJQTBCRiw2QkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksOEJBQXNCLHlCQXdCbEMsQ0FBQSIsImZpbGUiOiJhcHAvcHJvamVjdC1oZWFkZXIvcHJvamVjdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3Byb2plY3QtaGVhZGVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vcHJvamVjdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3Byb2plY3QtaGVhZGVyLmNzcyddLFxyXG5cdHByb3ZpZGVyczogW1Byb2plY3RzU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SGVhZGVyQ29tcG9uZW50IHtcclxuXHJcblx0QElucHV0KCkgcHJvamVjdDtcclxuXHRASW5wdXQoKSBwcm9qZWN0cztcclxuXHJcblx0QE91dHB1dCgpIHByb2plY3RzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoXHJcblx0XHRwcml2YXRlIHByb2plY3RzU2VydmljZTogUHJvamVjdHNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG5cdCkgeyB9XHJcblxyXG5cdGdvVG9FZGl0UHJvamVjdFBhZ2UocHJvamVjdDogUHJvamVjdCk6IHZvaWR7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lZGl0UHJvamVjdCcsIHByb2plY3QuX2lkXSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpOiB2b2lke1xyXG5cdFx0dGhpcy5wcm9qZWN0c1NlcnZpY2UucmVtb3ZlUHJvamVjdChwcm9qZWN0Ll9pZCkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoaXRlbSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW0uX2lkICE9PSByZXMuX2lkO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5wcm9qZWN0c0NoYW5nZS5lbWl0KHRoaXMucHJvamVjdHMpO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0iXX0=
