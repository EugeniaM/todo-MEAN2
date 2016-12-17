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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = "SIMPLE TODO LISTS";
        this.url = "/test";
    }
    AppComponent.prototype.test = function () {
        console.log("Worked!!!");
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return console.log(response.json()); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: '../app/app.html',
            styleUrls: ['../app/app.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQVFyQztJQUtDLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5QixVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDcEIsUUFBRyxHQUFHLE9BQU8sQ0FBQztJQUVZLENBQUM7SUFFbkMsMkJBQUksR0FBSjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDNUIsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFsQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3QixDQUFDOztvQkFBQTtJQWVGLG1CQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxvQkFBWSxlQWF4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAndG9kby1hcHAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi4vYXBwL2FwcC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vYXBwL2FwcC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG5cdHRpdGxlID0gXCJTSU1QTEUgVE9ETyBMSVNUU1wiO1xyXG5cdHByaXZhdGUgdXJsID0gXCIvdGVzdFwiO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuXHR0ZXN0KCk6IFByb21pc2U8YW55PiB7XHJcblx0XHRjb25zb2xlLmxvZyhcIldvcmtlZCEhIVwiKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsKVxyXG5cdFx0XHQudG9Qcm9taXNlKClcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSk7XHJcblx0fVxyXG59Il19
