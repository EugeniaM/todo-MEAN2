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
var common_1 = require('@angular/common');
var projects_service_1 = require('../services/projects.service');
var EditTaskComponent = (function () {
    function EditTaskComponent(projectsService, route, router, location) {
        this.projectsService = projectsService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idProject = this.route.snapshot.params['idProject'];
        this.idTask = this.route.snapshot.params['idTask'];
        this.project = this.projectsService.projects.filter(function (project) {
            return project._id === _this.idProject;
        })[0];
        this.task = this.project.tasks.filter(function (task) {
            return task._id === _this.idTask;
        })[0];
        this.taskBody = this.task.body;
    };
    EditTaskComponent.prototype.editTask = function () {
        var _this = this;
        if (!this.taskBody || this.taskBody === '')
            return;
        this.projectsService.editTask(this.idProject, this.idTask, { body: this.taskBody })
            .then(function () {
            _this.taskBody = '';
            _this.router.navigate(['/home']);
        });
    };
    EditTaskComponent.prototype.cancel = function () {
        this.location.back();
    };
    EditTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-task',
            templateUrl: './edit-task.component.html',
            styleUrls: ['../new-project/new-project.css']
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], EditTaskComponent);
    return EditTaskComponent;
}());
exports.EditTaskComponent = EditTaskComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBWS9EO0lBUUMsMkJBQ1MsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFFBQWtCO1FBSGxCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBRUwsb0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPO1lBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pGLElBQUksQ0FBQztZQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBaERGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzdDLENBQUM7O3lCQUFBO0lBNENGLHdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSx5QkFBaUIsb0JBMEM3QixDQUFBIiwiZmlsZSI6ImFwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vY2xhc3Nlcy90YXNrJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdlZGl0LXRhc2snLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0LXRhc2suY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuLi9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRUYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0cHJvamVjdDogUHJvamVjdDtcclxuXHR0YXNrOiBUYXNrO1xyXG5cdHRhc2tCb2R5OiBTdHJpbmc7XHJcblx0aWRQcm9qZWN0OiBTdHJpbmc7XHJcblx0aWRUYXNrOiBTdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6IFByb2plY3RzU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXHJcblx0KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmlkUHJvamVjdCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZFByb2plY3QnXTtcclxuXHRcdHRoaXMuaWRUYXNrID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkVGFzayddO1xyXG5cclxuXHRcdHRoaXMucHJvamVjdCA9IHRoaXMucHJvamVjdHNTZXJ2aWNlLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcclxuXHRcdFx0cmV0dXJuIHByb2plY3QuX2lkID09PSB0aGlzLmlkUHJvamVjdDtcclxuXHRcdH0pWzBdO1xyXG5cclxuXHRcdHRoaXMudGFzayA9IHRoaXMucHJvamVjdC50YXNrcy5maWx0ZXIodGFzayA9PiB7XHJcblx0XHRcdHJldHVybiB0YXNrLl9pZCA9PT0gdGhpcy5pZFRhc2s7XHJcblx0XHR9KVswXTtcclxuXHJcblx0XHR0aGlzLnRhc2tCb2R5ID0gdGhpcy50YXNrLmJvZHk7XHJcblx0fVxyXG5cclxuXHRlZGl0VGFzaygpOiB2b2lke1xyXG5cdFx0aWYoIXRoaXMudGFza0JvZHkgfHwgdGhpcy50YXNrQm9keSA9PT0gJycpIHJldHVybjtcclxuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLmVkaXRUYXNrKHRoaXMuaWRQcm9qZWN0LCB0aGlzLmlkVGFzaywgeyBib2R5OiB0aGlzLnRhc2tCb2R5IH0pXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnRhc2tCb2R5ID0gJyc7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdGNhbmNlbCgpOiB2b2lke1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG59Il19
