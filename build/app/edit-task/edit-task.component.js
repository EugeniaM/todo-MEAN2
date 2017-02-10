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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBWS9EO0lBUUMsMkJBQ1MsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFFBQWtCO1FBSGxCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBRUwsb0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPO1lBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5BLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pGLElBQUksQ0FBQztZQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBaERGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzdDLENBQUM7O3lCQUFBO0lBNENGLHdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSx5QkFBaUIsb0JBMEM3QixDQUFBIiwiZmlsZSI6ImFwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0JztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9jbGFzc2VzL3Rhc2snO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdlZGl0LXRhc2snLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdC10YXNrLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4uL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdFRhc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByb2plY3Q6IFByb2plY3Q7XG5cdHRhc2s6IFRhc2s7XG5cdHRhc2tCb2R5OiBTdHJpbmc7XG5cdGlkUHJvamVjdDogU3RyaW5nO1xuXHRpZFRhc2s6IFN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHByb2plY3RzU2VydmljZTogUHJvamVjdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25cblx0KSB7IH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLmlkUHJvamVjdCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZFByb2plY3QnXTtcblx0XHR0aGlzLmlkVGFzayA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZFRhc2snXTtcblxuXHRcdHRoaXMucHJvamVjdCA9IHRoaXMucHJvamVjdHNTZXJ2aWNlLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcblx0XHRcdHJldHVybiBwcm9qZWN0Ll9pZCA9PT0gdGhpcy5pZFByb2plY3Q7XG5cdFx0fSlbMF07XG5cblx0XHR0aGlzLnRhc2sgPSB0aGlzLnByb2plY3QudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuXHRcdFx0cmV0dXJuIHRhc2suX2lkID09PSB0aGlzLmlkVGFzaztcblx0XHR9KVswXTtcblxuXHRcdHRoaXMudGFza0JvZHkgPSB0aGlzLnRhc2suYm9keTtcblx0fVxuXG5cdGVkaXRUYXNrKCk6IHZvaWR7XG5cdFx0aWYoIXRoaXMudGFza0JvZHkgfHwgdGhpcy50YXNrQm9keSA9PT0gJycpIHJldHVybjtcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5lZGl0VGFzayh0aGlzLmlkUHJvamVjdCwgdGhpcy5pZFRhc2ssIHsgYm9keTogdGhpcy50YXNrQm9keSB9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRhc2tCb2R5ID0gJyc7XG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG5cdFx0XHR9KVxuXHR9XG5cblx0Y2FuY2VsKCk6IHZvaWR7XG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XG5cdH1cbn0iXX0=
