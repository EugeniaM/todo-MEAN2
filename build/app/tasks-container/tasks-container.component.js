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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXNrcy1jb250YWluZXIvdGFza3MtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRS9ELHdCQUF3QixvQkFBb0IsQ0FBQyxDQUFBO0FBVTdDO0lBR0MsaUNBQ1MsZUFBZ0MsRUFDaEMsTUFBYztRQURkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFTCxrREFBZ0IsR0FBaEIsVUFBaUIsT0FBZ0IsRUFBRSxJQUFVO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxPQUFnQixFQUFFLElBQVU7UUFBdkMsaUJBT0M7UUFOQSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDcEQsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNULEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsT0FBZ0IsRUFBRSxJQUFVO1FBQXpDLGlCQXNCQztRQXJCQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVks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QUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7OytCQUFBO0lBNkVGLDhCQUFDO0FBQUQsQ0EzRUEsQUEyRUMsSUFBQTtBQTNFWSwrQkFBdUIsMEJBMkVuQyxDQUFBIiwiZmlsZSI6ImFwcC90YXNrcy1jb250YWluZXIvdGFza3MtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL2NsYXNzZXMvcHJvamVjdCc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi9jbGFzc2VzL3Rhc2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3Rhc2tzLWNvbnRhaW5lcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3Rhc2tzLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vdGFza3MtY29udGFpbmVyLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza3NDb250YWluZXJDb21wb25lbnR7XHJcblx0QElucHV0KCkgcHJvamVjdDogUHJvamVjdDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHByb2plY3RzU2VydmljZTogUHJvamVjdHNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG5cdCkgeyB9XHJcblxyXG5cdGdvVG9FZGl0VGFza1BhZ2UocHJvamVjdDogUHJvamVjdCwgdGFzazogVGFzayk6IHZvaWR7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lZGl0VGFzaycsIHByb2plY3QuX2lkLCB0YXNrLl9pZF0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlVGFzayhwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcclxuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLnJlbW92ZVRhc2socHJvamVjdC5faWQsIHRhc2suX2lkKVxyXG5cdFx0XHQudGhlbih0YXNrID0+IHtcclxuXHRcdFx0XHR0aGlzLnByb2plY3QudGFza3MgPSB0aGlzLnByb2plY3QudGFza3MuZmlsdGVyKHRhc2tJdGVtID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0YXNrSXRlbS5faWQgIT09IHRhc2suX2lkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaW9yaXRpemVVcChwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcclxuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLnByaW9yaXRpemVVcChwcm9qZWN0Ll9pZCwgdGFzay5faWQsIHRhc2spXHJcblx0XHRcdC50aGVuKHRhc2tSZXMgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50UHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xyXG5cdFx0XHRcdGlmKGN1cnJlbnRQcmlvcml0eSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgdGFyZ2V0UHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHkgLSAxO1xyXG5cclxuXHRcdFx0XHR0aGlzLnByb2plY3QudGFza3MgPSB0aGlzLnByb2plY3QudGFza3MubWFwKHRhc2tJdGVtID0+IHtcclxuXHRcdFx0XHRcdGlmKHRhc2tJdGVtLnByaW9yaXR5ID09PSBjdXJyZW50UHJpb3JpdHkpIHtcclxuXHRcdFx0XHRcdFx0dGFza0l0ZW0ucHJpb3JpdHkgPSB0YXJnZXRQcmlvcml0eTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRhc2tJdGVtO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKHRhc2tJdGVtLnByaW9yaXR5ID09PSB0YXJnZXRQcmlvcml0eSkge1xyXG5cdFx0XHRcdFx0XHR0YXNrSXRlbS5wcmlvcml0eSA9IGN1cnJlbnRQcmlvcml0eTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRhc2tJdGVtO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRhc2tJdGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0cHJpb3JpdGl6ZURvd24ocHJvamVjdDogUHJvamVjdCwgdGFzazogVGFzayk6IHZvaWR7XHJcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5wcmlvcml0aXplRG93bihwcm9qZWN0Ll9pZCwgdGFzay5faWQsIHRhc2spXHJcblx0XHRcdC50aGVuKHRhc2tSZXMgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50UHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5O1xyXG5cdFx0XHRcdGxldCBtYXhQcmlvcml0eSA9IHRoaXMucHJvamVjdC50YXNrcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdGlmKGN1cnJlbnRQcmlvcml0eSA9PT0gbWF4UHJpb3JpdHkpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHRhcmdldFByaW9yaXR5ID0gY3VycmVudFByaW9yaXR5ICsgMTtcclxuXHJcblx0XHRcdFx0dGhpcy5wcm9qZWN0LnRhc2tzID0gdGhpcy5wcm9qZWN0LnRhc2tzLm1hcCh0YXNrSXRlbSA9PiB7XHJcblx0XHRcdFx0XHRpZih0YXNrSXRlbS5wcmlvcml0eSA9PT0gY3VycmVudFByaW9yaXR5KSB7XHJcblx0XHRcdFx0XHRcdHRhc2tJdGVtLnByaW9yaXR5ID0gdGFyZ2V0UHJpb3JpdHk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0YXNrSXRlbTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZih0YXNrSXRlbS5wcmlvcml0eSA9PT0gdGFyZ2V0UHJpb3JpdHkpIHtcclxuXHRcdFx0XHRcdFx0dGFza0l0ZW0ucHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0YXNrSXRlbTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0YXNrSXRlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdGNoYW5nZVN0YXR1cyhwcm9qZWN0OiBQcm9qZWN0LCB0YXNrOiBUYXNrKTogdm9pZHtcclxuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLmNoYW5nZVN0YXR1cyhwcm9qZWN0Ll9pZCwgdGFzay5faWQsIHtcclxuXHRcdFx0c3RhdHVzOiB0YXNrLnN0YXR1c1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il19
