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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0LWhlYWRlci9wcm9qZWN0LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUd6QyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVkvRDtJQU9DLGdDQUNTLGVBQWdDLEVBQ2hDLE1BQWM7UUFEZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpiLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFLMUMsQ0FBQztJQUVMLG9EQUFtQixHQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLE9BQWdCO1FBQTlCLGlCQU9DO1FBTkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7Z0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBckJEO1FBQUMsWUFBSyxFQUFFOzsyREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOztrRUFBQTtJQWJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUM1QixDQUFDOzs4QkFBQTtJQTBCRiw2QkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksOEJBQXNCLHlCQXdCbEMsQ0FBQSIsImZpbGUiOiJhcHAvcHJvamVjdC1oZWFkZXIvcHJvamVjdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHMuc2VydmljZSc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdwcm9qZWN0LWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9wcm9qZWN0LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Byb2plY3QtaGVhZGVyLmNzcyddLFxuXHRwcm92aWRlcnM6IFtQcm9qZWN0c1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdEhlYWRlckNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcHJvamVjdDtcblx0QElucHV0KCkgcHJvamVjdHM7XG5cblx0QE91dHB1dCgpIHByb2plY3RzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yIChcblx0XHRwcml2YXRlIHByb2plY3RzU2VydmljZTogUHJvamVjdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcblx0KSB7IH1cblxuXHRnb1RvRWRpdFByb2plY3RQYWdlKHByb2plY3Q6IFByb2plY3QpOiB2b2lke1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2VkaXRQcm9qZWN0JywgcHJvamVjdC5faWRdKTtcblx0fVxuXG5cdHJlbW92ZVByb2plY3QocHJvamVjdDogUHJvamVjdCk6IHZvaWR7XG5cdFx0dGhpcy5wcm9qZWN0c1NlcnZpY2UucmVtb3ZlUHJvamVjdChwcm9qZWN0Ll9pZCkudGhlbihyZXMgPT4ge1xuXHRcdFx0dGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS5faWQgIT09IHJlcy5faWQ7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucHJvamVjdHNDaGFuZ2UuZW1pdCh0aGlzLnByb2plY3RzKTtcblx0XHR9KVxuXHR9XG59Il19
