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
var AuthSigninComponent = (function () {
    function AuthSigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            username: '',
            password: ''
        };
        this.error = "";
    }
    AuthSigninComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    };
    AuthSigninComponent.prototype.signin = function (event) {
        var _this = this;
        event.preventDefault();
        this.authService.login(this.user)
            .then(function () {
            _this.router.navigate(['/home']);
        }, function (err) {
            var resError = err.json();
            _this.error = resError;
        });
    };
    AuthSigninComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    AuthSigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'auth-signin',
            templateUrl: './auth-signin.component.html',
            styleUrls: ['./auth-signup.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], AuthSigninComponent);
    return AuthSigninComponent;
}());
exports.AuthSigninComponent = AuthSigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLDZCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBV3ZEO0lBT0MsNkJBQ1MsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSdkIsU0FBSSxHQUFTO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFDRixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBS1osQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUFaLGlCQVVDO1FBVEEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsSUFBSSxDQUFDO1lBQ0wsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDSCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsb0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdkNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2hDLENBQUM7OzJCQUFBO0lBbUNGLDBCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSwyQkFBbUIsc0JBaUMvQixDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGgtc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vY2xhc3Nlcy91c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdhdXRoLXNpZ25pbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2F1dGgtc2lnbmluLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hdXRoLXNpZ251cC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0dXNlcjogVXNlciA9IHtcclxuXHRcdHVzZXJuYW1lOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJ1xyXG5cdH07XHJcblx0ZXJyb3I6IGFueSA9IFwiXCI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcblx0KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZHtcclxuXHRcdGlmKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaWduaW4oZXZlbnQpOiB2b2lke1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KGVycikgPT4ge1xyXG5cdFx0XHRcdHZhciByZXNFcnJvciA9IGVyci5qc29uKCk7XHJcblx0XHRcdFx0dGhpcy5lcnJvciA9IHJlc0Vycm9yO1xyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y2FuY2VsKCk6IHZvaWR7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG5cdH1cclxufSJdfQ==
