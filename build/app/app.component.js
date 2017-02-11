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
        this.subtitle = "FROM RUBY GARAGE";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLFFBQU8sNkJBQTZCLENBQUMsQ0FBQTtBQVFyQztJQU1DLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ3RCLFFBQUcsR0FBRyxPQUFPLENBQUM7SUFFWSxDQUFDO0lBRW5DLDJCQUFJLEdBQUo7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQzVCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbkJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDN0IsQ0FBQzs7b0JBQUE7SUFnQkYsbUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLG9CQUFZLGVBY3hCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd0b2RvLWFwcCcsXG5cdHRlbXBsYXRlVXJsOiAnLi4vYXBwL2FwcC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4uL2FwcC9hcHAuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cdHRpdGxlID0gXCJTSU1QTEUgVE9ETyBMSVNUU1wiO1xuXHRzdWJ0aXRsZSA9IFwiRlJPTSBSVUJZIEdBUkFHRVwiO1xuXHRwcml2YXRlIHVybCA9IFwiL3Rlc3RcIjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG5cdHRlc3QoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zb2xlLmxvZyhcIldvcmtlZCEhIVwiKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybClcblx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKSk7XG5cdH1cbn0iXX0=
