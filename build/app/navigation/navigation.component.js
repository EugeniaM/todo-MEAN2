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
var auth_service_1 = require('../services/auth.service');
var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = this.authService.isLoggedIn;
        this.currentUser = this.authService.currentUser;
        this.logout = this.authService.logout;
    }
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-header',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFHMUMsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFTdkQ7SUFFQyw2QkFDUyxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdqQyxlQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxXQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFKN0IsQ0FBQztJQVhOO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQy9CLENBQUM7OzJCQUFBO0lBV0YsMEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDJCQUFtQixzQkFTL0IsQ0FBQSIsImZpbGUiOiJhcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICduYXYtaGVhZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2Vcblx0KSB7IH1cblxuXHRpc0xvZ2dlZEluID0gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluO1xuXHRjdXJyZW50VXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXI7XG5cdGxvZ291dCA9IHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0O1xufSJdfQ==
