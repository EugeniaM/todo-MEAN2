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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.saveToken = function (token) {
        localStorage['todos-app-token-angular2'] = token;
    };
    ;
    AuthService.prototype.getToken = function () {
        return localStorage['todos-app-token-angular2'];
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage['todos-app-token-angular2'];
        if (token) {
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    ;
    AuthService.prototype.currentUser = function () {
        if (this.isLoggedIn()) {
            var token = localStorage['todos-app-token-angular2'];
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.username;
        }
    };
    ;
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var url = '/signup';
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var data = res.json();
            _this.saveToken(data.token);
        });
    };
    ;
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = '/login';
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var data = res.json();
            _this.saveToken(data.token);
        });
    };
    ;
    AuthService.prototype.logout = function () {
        localStorage.removeItem('todos-app-token-angular2');
    };
    ;
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFFOUMsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBTXJDO0lBSUMscUJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnZCLFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVyQywrQkFBUyxHQUFULFVBQVUsS0FBYTtRQUN0QixZQUFZLENBQUMsMEJBQTBCLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7SUFFRCw4QkFBUSxHQUFSO1FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0MsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFckQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDRixDQUFDOztJQUVELGlDQUFXLEdBQVg7UUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3JELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXBELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDOztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQWpCLGlCQVNDO1FBUkEsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDeEQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNSLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFBaEIsaUJBU0M7UUFSQSxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQzthQUN4RCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFRCw0QkFBTSxHQUFOO1FBQ0MsWUFBWSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0lBN0RGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE4RGIsa0JBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLG1CQUFXLGNBNER2QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2NsYXNzZXMvdXNlcic7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0XG5cdHByaXZhdGUgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cblx0Y29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cFx0KSB7IH1cblxuXHRzYXZlVG9rZW4odG9rZW46IE9iamVjdCk6IHZvaWR7XG5cdFx0bG9jYWxTdG9yYWdlWyd0b2Rvcy1hcHAtdG9rZW4tYW5ndWxhcjInXSA9IHRva2VuO1xuXHR9O1xuXG5cdGdldFRva2VuKCk6IHZvaWR7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZVsndG9kb3MtYXBwLXRva2VuLWFuZ3VsYXIyJ107XG5cdH1cblxuXHRpc0xvZ2dlZEluKCk6IGJvb2xlYW57XG5cdFx0bGV0IHRva2VuID0gbG9jYWxTdG9yYWdlWyd0b2Rvcy1hcHAtdG9rZW4tYW5ndWxhcjInXTtcblxuXHRcdGlmKHRva2VuKSB7XG5cdFx0XHRsZXQgcGF5bG9hZCA9IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSk7XG5cblx0XHRcdHJldHVybiBwYXlsb2FkLmV4cCA+IERhdGUubm93KCkgLyAxMDAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGN1cnJlbnRVc2VyKCk6IHZvaWR7XG5cdFx0aWYodGhpcy5pc0xvZ2dlZEluKCkpIHtcblx0XHRcdGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZVsndG9kb3MtYXBwLXRva2VuLWFuZ3VsYXIyJ107XG5cdFx0XHRsZXQgcGF5bG9hZCA9IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSk7XG5cblx0XHRcdHJldHVybiBwYXlsb2FkLnVzZXJuYW1lO1xuXHRcdH1cblx0fTtcblxuXHRzaWdudXAodXNlcjogVXNlcik6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgdXJsID0gJy9zaWdudXAnO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkodXNlciksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG5cdFx0XHRcdHRoaXMuc2F2ZVRva2VuKGRhdGEudG9rZW4pO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0bG9naW4odXNlcjogVXNlcik6IFByb21pc2U8YW55PiB7XG5cdFx0Y29uc3QgdXJsID0gJy9sb2dpbic7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxuXHRcdFx0LnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGxldCBkYXRhID0gcmVzLmpzb24oKTtcblx0XHRcdFx0dGhpcy5zYXZlVG9rZW4oZGF0YS50b2tlbik7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRsb2dvdXQoKTogdm9pZHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MtYXBwLXRva2VuLWFuZ3VsYXIyJyk7XG5cdH07XG59Il19
