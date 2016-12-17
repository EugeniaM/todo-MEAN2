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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZGl0LXByb2plY3QvZWRpdC1wcm9qZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQUdyQyxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQVMvRDtJQU1DLDhCQUNTLGVBQWdDLEVBQ2hDLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxRQUFrQjtRQUhsQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdkIsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztZQUN6RCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkEsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRTFELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUCxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXpDRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDOzs0QkFBQTtJQXFDRiwyQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksNEJBQW9CLHVCQW1DaEMsQ0FBQSIsImZpbGUiOiJhcHAvZWRpdC1wcm9qZWN0L2VkaXQtcHJvamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0JztcclxuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvamVjdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdC1wcm9qZWN0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vbmV3LXByb2plY3QvbmV3LXByb2plY3QuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvamVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0cHJvamVjdDogUHJvamVjdDtcclxuXHRwcm9qZWN0VGl0bGU6IFN0cmluZztcclxuXHRpZDogU3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcHJvamVjdHNTZXJ2aWNlOiBQcm9qZWN0c1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWR7XHJcblx0XHR0aGlzLmlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XHJcblx0XHR0aGlzLnByb2plY3QgPSB0aGlzLnByb2plY3RzU2VydmljZS5wcm9qZWN0cy5maWx0ZXIoKHZhbHVlKSA9PiB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5faWQgPT09IHRoaXMuaWQ7XHJcblx0XHR9KVswXTtcclxuXHRcdHRoaXMucHJvamVjdFRpdGxlID0gdGhpcy5wcm9qZWN0LnRpdGxlO1xyXG5cdH1cclxuXHJcblx0ZWRpdFByb2plY3QoKTogdm9pZHtcclxuXHRcdGlmKCF0aGlzLnByb2plY3RUaXRsZSB8fCB0aGlzLnByb2plY3RUaXRsZSA9PT0gJycpIHJldHVybjtcclxuXHJcblx0XHR0aGlzLnByb2plY3RzU2VydmljZS5lZGl0UHJvamVjdCh0aGlzLmlkLCB7XHJcblx0XHRcdHRpdGxlOiB0aGlzLnByb2plY3RUaXRsZVxyXG5cdFx0fSkudGhlbigoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvamVjdFRpdGxlID0gJyc7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNhbmNlbCgpOiB2b2lke1xyXG5cdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG59Il19
