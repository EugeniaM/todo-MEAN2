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
var project_1 = require('../classes/project');
var TasksContainerComponent = (function () {
    function TasksContainerComponent(projectsService, router) {
        this.projectsService = projectsService;
        this.router = router;
    }
    TasksContainerComponent.prototype.goToEditTaskPage = function (project, task) {
        this.router.navigate(['/editTask', project._id, task._id]);
    };
    TasksContainerComponent.prototype.removeTask = function (project, task) {
        var _this = this;
        this.projectsService.removeTask(project._id, task._id)
            .then(function (task) {
            _this.project.tasks = _this.project.tasks.filter(function (taskItem) {
                return taskItem._id !== task._id;
            });
        });
    };
    TasksContainerComponent.prototype.prioritizeUp = function (project, task) {
        var _this = this;
        this.projectsService.prioritizeUp(project._id, task._id, task)
            .then(function (taskRes) {
            var currentPriority = task.priority;
            if (currentPriority === 0) {
                return;
            }
            var targetPriority = currentPriority - 1;
            _this.project.tasks = _this.project.tasks.map(function (taskItem) {
                if (taskItem.priority === currentPriority) {
                    taskItem.priority = targetPriority;
                    return taskItem;
                }
                else if (taskItem.priority === targetPriority) {
                    taskItem.priority = currentPriority;
                    return taskItem;
                }
                else {
                    return taskItem;
                }
            });
        });
    };
    TasksContainerComponent.prototype.prioritizeDown = function (project, task) {
        var _this = this;
        this.projectsService.prioritizeDown(project._id, task._id, task)
            .then(function (taskRes) {
            var currentPriority = task.priority;
            var maxPriority = _this.project.tasks.length - 1;
            if (currentPriority === maxPriority) {
                return;
            }
            var targetPriority = currentPriority + 1;
            _this.project.tasks = _this.project.tasks.map(function (taskItem) {
                if (taskItem.priority === currentPriority) {
                    taskItem.priority = targetPriority;
                    return taskItem;
                }
                else if (taskItem.priority === targetPriority) {
                    taskItem.priority = currentPriority;
                    return taskItem;
                }
                else {
                    return taskItem;
                }
            });
        });
    };
    TasksContainerComponent.prototype.changeStatus = function (project, task) {
        this.projectsService.changeStatus(project._id, task._id, {
            status: task.status
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], TasksContainerComponent.prototype, "project", void 0);
    TasksContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks-container',
            templateUrl: './tasks-container.component.html',
            styleUrls: ['./tasks-container.css']
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.Router])
    ], TasksContainerComponent);
    return TasksContainerComponent;
}());
exports.TasksContainerComponent = TasksContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXNrcy1jb250YWluZXIvdGFza3MtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRS9ELHdCQUF3QixvQkFBb0IsQ0FBQyxDQUFBO0FBVTdDO0lBR0MsaUNBQ1MsZUFBZ0MsRUFDaEMsTUFBYztRQURkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFTCxrREFBZ0IsR0FBaEIsVUFBaUIsT0FBZ0IsRUFBRSxJQUFVO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxPQUFnQixFQUFFLElBQVU7UUFBdkMsaUJBT0M7UUFOQSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsT0FBZ0IsRUFBRSxJQUFVO1FBQXpDLGlCQXNCQztRQXJCQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVks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QUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7OytCQUFBO0lBNkVGLDhCQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQTNFWSwrQkFBdUIsMEJBMkVuQyxDQUFBIiwiZmlsZSI6ImFwcC90YXNrcy1jb250YWluZXIvdGFza3MtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0JztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9jbGFzc2VzL3Rhc2snO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd0YXNrcy1jb250YWluZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vdGFza3MtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vdGFza3MtY29udGFpbmVyLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGFza3NDb250YWluZXJDb21wb25lbnR7XG5cdEBJbnB1dCgpIHByb2plY3Q6IFByb2plY3Q7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6IFByb2plY3RzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkgeyB9XG5cblx0Z29Ub0VkaXRUYXNrUGFnZShwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lZGl0VGFzaycsIHByb2plY3QuX2lkLCB0YXNrLl9pZF0pO1xuXHR9XG5cblx0cmVtb3ZlVGFzayhwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5yZW1vdmVUYXNrKHByb2plY3QuX2lkLCB0YXNrLl9pZClcblx0XHRcdC50aGVuKHRhc2sgPT4ge1xuXHRcdFx0XHR0aGlzLnByb2plY3QudGFza3MgPSB0aGlzLnByb2plY3QudGFza3MuZmlsdGVyKHRhc2tJdGVtID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gdGFza0l0ZW0uX2lkICE9PSB0YXNrLl9pZDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaW9yaXRpemVVcChwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5wcmlvcml0aXplVXAocHJvamVjdC5faWQsIHRhc2suX2lkLCB0YXNrKVxuXHRcdFx0LnRoZW4odGFza1JlcyA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xuXHRcdFx0XHRpZihjdXJyZW50UHJpb3JpdHkgPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRhcmdldFByaW9yaXR5ID0gY3VycmVudFByaW9yaXR5IC0gMTtcblxuXHRcdFx0XHR0aGlzLnByb2plY3QudGFza3MgPSB0aGlzLnByb2plY3QudGFza3MubWFwKHRhc2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZih0YXNrSXRlbS5wcmlvcml0eSA9PT0gY3VycmVudFByaW9yaXR5KSB7XG5cdFx0XHRcdFx0XHR0YXNrSXRlbS5wcmlvcml0eSA9IHRhcmdldFByaW9yaXR5O1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhc2tJdGVtO1xuXHRcdFx0XHRcdH0gZWxzZSBpZih0YXNrSXRlbS5wcmlvcml0eSA9PT0gdGFyZ2V0UHJpb3JpdHkpIHtcblx0XHRcdFx0XHRcdHRhc2tJdGVtLnByaW9yaXR5ID0gY3VycmVudFByaW9yaXR5O1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhc2tJdGVtO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFza0l0ZW07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9KVxuXHR9XG5cblx0cHJpb3JpdGl6ZURvd24ocHJvamVjdDogUHJvamVjdCwgdGFzazogVGFzayk6IHZvaWR7XG5cdFx0dGhpcy5wcm9qZWN0c1NlcnZpY2UucHJpb3JpdGl6ZURvd24ocHJvamVjdC5faWQsIHRhc2suX2lkLCB0YXNrKVxuXHRcdFx0LnRoZW4odGFza1JlcyA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xuXHRcdFx0XHRsZXQgbWF4UHJpb3JpdHkgPSB0aGlzLnByb2plY3QudGFza3MubGVuZ3RoIC0gMTtcblx0XHRcdFx0aWYoY3VycmVudFByaW9yaXR5ID09PSBtYXhQcmlvcml0eSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdGFyZ2V0UHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHkgKyAxO1xuXG5cdFx0XHRcdHRoaXMucHJvamVjdC50YXNrcyA9IHRoaXMucHJvamVjdC50YXNrcy5tYXAodGFza0l0ZW0gPT4ge1xuXHRcdFx0XHRcdGlmKHRhc2tJdGVtLnByaW9yaXR5ID09PSBjdXJyZW50UHJpb3JpdHkpIHtcblx0XHRcdFx0XHRcdHRhc2tJdGVtLnByaW9yaXR5ID0gdGFyZ2V0UHJpb3JpdHk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFza0l0ZW07XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHRhc2tJdGVtLnByaW9yaXR5ID09PSB0YXJnZXRQcmlvcml0eSkge1xuXHRcdFx0XHRcdFx0dGFza0l0ZW0ucHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFza0l0ZW07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB0YXNrSXRlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cblx0XHRcdH0pXG5cdH1cblxuXHRjaGFuZ2VTdGF0dXMocHJvamVjdDogUHJvamVjdCwgdGFzazogVGFzayk6IHZvaWR7XG5cdFx0dGhpcy5wcm9qZWN0c1NlcnZpY2UuY2hhbmdlU3RhdHVzKHByb2plY3QuX2lkLCB0YXNrLl9pZCwge1xuXHRcdFx0c3RhdHVzOiB0YXNrLnN0YXR1c1xuXHRcdH0pO1xuXHR9XG59Il19
