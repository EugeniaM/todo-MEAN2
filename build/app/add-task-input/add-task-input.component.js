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
var projects_service_1 = require('../services/projects.service');
var project_1 = require('../classes/project');
var AddTaskInputComponent = (function () {
    function AddTaskInputComponent(projectsService) {
        this.projectsService = projectsService;
        this.newTask = {
            body: []
        };
    }
    AddTaskInputComponent.prototype.addNewTask = function (event, project) {
        var _this = this;
        event.preventDefault();
        var foundIndex = this.projectsService.projects.indexOf(project);
        if (!this.newTask.body[foundIndex] || this.newTask.body[foundIndex] === "")
            return;
        this.projectsService.createTask(project._id, {
            body: this.newTask.body[foundIndex],
            priority: project.tasks.length
        }).then(function (task) {
            _this.projectsService.projects[foundIndex].tasks.push(task);
            _this.newTask.body[foundIndex] = '';
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], AddTaskInputComponent.prototype, "project", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddTaskInputComponent.prototype, "index", void 0);
    AddTaskInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-task-input',
            templateUrl: './add-task-input.component.html',
            styleUrls: ['./add-task-input.css']
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], AddTaskInputComponent);
    return AddTaskInputComponent;
}());
exports.AddTaskInputComponent = AddTaskInputComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGQtdGFzay1pbnB1dC9hZGQtdGFzay1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUVqRCxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUUvRCx3QkFBd0Isb0JBQW9CLENBQUMsQ0FBQTtBQVM3QztJQVFDLCtCQUNTLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUx6QyxZQUFPLEdBQUc7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNSLENBQUM7SUFJRSxDQUFDO0lBRUwsMENBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxPQUFnQjtRQUFsQyxpQkFZQztRQVhBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFFbEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUM1QyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07U0FDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDWixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUF2QkQ7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBVFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuQyxDQUFDOzs2QkFBQTtJQTJCRiw0QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksNkJBQXFCLHdCQXlCakMsQ0FBQSIsImZpbGUiOiJhcHAvYWRkLXRhc2staW5wdXQvYWRkLXRhc2staW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdhZGQtdGFzay1pbnB1dCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FkZC10YXNrLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hZGQtdGFzay1pbnB1dC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFRhc2tJbnB1dENvbXBvbmVudCB7XHJcblx0QElucHV0KCkgcHJvamVjdDogUHJvamVjdDtcclxuXHRASW5wdXQoKSBpbmRleDtcclxuXHJcblx0bmV3VGFzayA9IHtcclxuXHRcdGJvZHk6IFtdXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHByb2plY3RzU2VydmljZTogUHJvamVjdHNTZXJ2aWNlXHJcblx0KSB7IH1cclxuXHJcblx0YWRkTmV3VGFzayhldmVudCwgcHJvamVjdDogUHJvamVjdCk6IHZvaWQge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBmb3VuZEluZGV4ID0gdGhpcy5wcm9qZWN0c1NlcnZpY2UucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuXHRcdGlmKCF0aGlzLm5ld1Rhc2suYm9keVtmb3VuZEluZGV4XSB8fCB0aGlzLm5ld1Rhc2suYm9keVtmb3VuZEluZGV4XSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuXHRcdHRoaXMucHJvamVjdHNTZXJ2aWNlLmNyZWF0ZVRhc2socHJvamVjdC5faWQsIHtcclxuXHRcdFx0Ym9keTogdGhpcy5uZXdUYXNrLmJvZHlbZm91bmRJbmRleF0sXHJcblx0XHRcdHByaW9yaXR5OiBwcm9qZWN0LnRhc2tzLmxlbmd0aFxyXG5cdFx0fSkudGhlbigodGFzaykgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2plY3RzU2VydmljZS5wcm9qZWN0c1tmb3VuZEluZGV4XS50YXNrcy5wdXNoKHRhc2spO1xyXG5cdFx0XHR0aGlzLm5ld1Rhc2suYm9keVtmb3VuZEluZGV4XSA9ICcnO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il19
