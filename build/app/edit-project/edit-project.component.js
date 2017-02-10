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
require('rxjs/add/operator/switchMap');
var projects_service_1 = require('../services/projects.service');
var EditProjectComponent = (function () {
    function EditProjectComponent(projectsService, route, router, location) {
        this.projectsService = projectsService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.project = this.projectsService.projects.filter(function (value) {
            return value._id === _this.id;
        })[0];
        this.projectTitle = this.project.title;
    };
    EditProjectComponent.prototype.editProject = function () {
        var _this = this;
        if (!this.projectTitle || this.projectTitle === '')
            return;
        this.projectsService.editProject(this.id, {
            title: this.projectTitle
        }).then(function () {
            _this.projectTitle = '';
            _this.router.navigate(['/home']);
        });
    };
    EditProjectComponent.prototype.cancel = function () {
        this.location.back();
    };
    EditProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-project',
            templateUrl: './edit-project.component.html',
            styleUrls: ['../new-project/new-project.css']
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], EditProjectComponent);
    return EditProjectComponent;
}());
exports.EditProjectComponent = EditProjectComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0LXByb2plY3QvZWRpdC1wcm9qZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVMvRDtJQU1DLDhCQUNTLGVBQWdDLEVBQ2hDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQjtRQUhsQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdkIsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUN6RCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkEsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRTFELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXpDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDOzs0QkFBQTtJQXFDRiwyQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksNEJBQW9CLHVCQW1DaEMsQ0FBQSIsImZpbGUiOiJhcHAvZWRpdC1wcm9qZWN0L2VkaXQtcHJvamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0JztcbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdlZGl0LXByb2plY3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4uL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdFByb2plY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cblx0cHJvamVjdDogUHJvamVjdDtcblx0cHJvamVjdFRpdGxlOiBTdHJpbmc7XG5cdGlkOiBTdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6IFByb2plY3RzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKTogdm9pZHtcblx0XHR0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG5cdFx0dGhpcy5wcm9qZWN0ID0gdGhpcy5wcm9qZWN0c1NlcnZpY2UucHJvamVjdHMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHZhbHVlLl9pZCA9PT0gdGhpcy5pZDtcblx0XHR9KVswXTtcblx0XHR0aGlzLnByb2plY3RUaXRsZSA9IHRoaXMucHJvamVjdC50aXRsZTtcblx0fVxuXG5cdGVkaXRQcm9qZWN0KCk6IHZvaWR7XG5cdFx0aWYoIXRoaXMucHJvamVjdFRpdGxlIHx8IHRoaXMucHJvamVjdFRpdGxlID09PSAnJykgcmV0dXJuO1xuXG5cdFx0dGhpcy5wcm9qZWN0c1NlcnZpY2UuZWRpdFByb2plY3QodGhpcy5pZCwge1xuXHRcdFx0dGl0bGU6IHRoaXMucHJvamVjdFRpdGxlXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHR0aGlzLnByb2plY3RUaXRsZSA9ICcnO1xuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcblx0XHR9KTtcblx0fVxuXG5cdGNhbmNlbCgpOiB2b2lke1xuXHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xuXHR9XG59Il19
