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
var auth_service_1 = require('../services/auth.service');
var AuthSignupComponent = (function () {
    function AuthSignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
        this.error = "";
    }
    AuthSignupComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    AuthSignupComponent.prototype.signup = function (event) {
        var _this = this;
        event.preventDefault();
        this.authService.signup(this.user)
            .then(function () {
            _this.router.navigate(['/home']);
        }, function (err) {
            var resError = err.json();
            _this.error = resError;
        });
    };
    AuthSignupComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    AuthSignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'auth-signup',
            templateUrl: './auth-signup.component.html',
            styleUrls: ['./auth-signup.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthSignupComponent);
    return AuthSignupComponent;
}());
exports.AuthSignupComponent = AuthSignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgtc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBV3ZEO0lBT0MsNkJBQ1MsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSdkIsU0FBSSxHQUFTO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFDRixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBS1osQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUFaLGlCQVVDO1FBVEEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEMsSUFBSSxDQUFDO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDSCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdkNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2hDLENBQUM7OzJCQUFBO0lBbUNGLDBCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSwyQkFBbUIsc0JBaUMvQixDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGgtc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vY2xhc3Nlcy91c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdhdXRoLXNpZ251cCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2F1dGgtc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hdXRoLXNpZ251cC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXI6IFVzZXIgPSB7XHJcblx0XHR1c2VybmFtZTogJycsXHJcblx0XHRwYXNzd29yZDogJydcclxuXHR9O1xyXG5cdGVycm9yOiBhbnkgPSBcIlwiO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWR7XHJcblx0XHRpZih0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2lnbnVwKGV2ZW50KTogdm9pZHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cCh0aGlzLnVzZXIpXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoZXJyKSA9PiB7XHJcblx0XHRcdFx0dmFyIHJlc0Vycm9yID0gZXJyLmpzb24oKTtcclxuXHRcdFx0XHR0aGlzLmVycm9yID0gcmVzRXJyb3I7XHJcblx0XHRcdH0pXHJcblx0fVxyXG5cclxuXHRjYW5jZWwoKTogdm9pZHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcblx0fVxyXG59Il19
