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
var auth_service_1 = require('./auth.service');
require('rxjs/add/operator/toPromise');
var _ = require('lodash');
var ProjectsService = (function () {
    function ProjectsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.headersAuth = new http_1.Headers({});
    }
    ProjectsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProjectsService.prototype.getAll = function () {
        var _this = this;
        var url = "/projects";
        var token = this.authService.getToken();
        this.headersAuth.delete('Authorization');
        this.headersAuth.append('Authorization', "Bearer " + token);
        return this.http
            .get(url, { headers: this.headersAuth, body: '' })
            .toPromise()
            .then(function (res) {
            if (!_this.projects) {
                _this.projects = [];
            }
            _this.projects = _.cloneDeep(res.json());
            return _this.projects;
        });
    };
    ProjectsService.prototype.createProject = function (title) {
        var _this = this;
        var url = "/projects";
        var token = this.authService.getToken();
        this.headersAuth.append('Content-Type', 'application/json');
        this.headersAuth.append('Authorization', "Bearer " + token);
        return this.http
            .post(url, JSON.stringify({ title: title }), { headers: this.headersAuth })
            .toPromise()
            .then(function (res) {
            if (!_this.projects) {
                _this.projects = [];
            }
            _this.projects.push(res.json());
        })
            .catch(this.handleError);
    };
    ProjectsService.prototype.editProject = function (id, project) {
        var _this = this;
        var url = "/projects/" + id + "/";
        return this.http
            .post(url, JSON.stringify(project), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            _this.projects = _this.projects.map(function (item) {
                if (item._id === res._id) {
                    return item = res;
                }
                else {
                    return item;
                }
            });
        });
    };
    ProjectsService.prototype.removeProject = function (id) {
        var url = "/projects/" + id;
        return this.http
            .delete(url, { headers: this.headers, body: '' })
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    ProjectsService.prototype.createTask = function (id, task) {
        var url = "/projects/" + id + "/tasks";
        return this.http
            .post(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    ProjectsService.prototype.editTask = function (idProject, idTask, task) {
        var _this = this;
        var url = "/projects/" + idProject + "/tasks/" + idTask;
        return this.http
            .post(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            for (var i = 0; i < _this.projects.length; i++) {
                if (_this.projects[i]._id === idProject) {
                    for (var j = 0; j < _this.projects[i].tasks.length; j++) {
                        if (_this.projects[i].tasks[j]._id === idTask) {
                            _this.projects[i].tasks[j] = res.json();
                        }
                    }
                }
            }
        });
    };
    ProjectsService.prototype.removeTask = function (idProject, idTask) {
        var url = "/projects/" + idProject + "/tasks/" + idTask;
        return this.http
            .delete(url, { headers: this.headers, body: '' })
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    ProjectsService.prototype.prioritizeUp = function (idProject, idTask, task) {
        var url = "/projects/" + idProject + "/tasks/" + idTask + "/prioritizeUp";
        return this.http
            .put(url, { headers: this.headers, body: '' })
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    ProjectsService.prototype.prioritizeDown = function (idProject, idTask, task) {
        var url = "/projects/" + idProject + "/tasks/" + idTask + "/prioritizeDown";
        return this.http
            .put(url, { headers: this.headers, body: '' })
            .toPromise()
            .then(function (res) {
            return res.json();
        });
    };
    ProjectsService.prototype.changeStatus = function (idProject, idTask, status) {
        var url = "/projects/" + idProject + "/tasks/" + idTask + "/changeStatus";
        return this.http
            .post(url, JSON.stringify(status), { headers: this.headers })
            .toPromise()
            .then(function (res) {
        });
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9qZWN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLDZCQUE0QixnQkFFNUIsQ0FBQyxDQUYyQztBQUU1QyxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFDckMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFPNUI7SUFNQyx5QkFBcUIsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUh6RCxZQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQzVELGdCQUFXLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFK0IsQ0FBQztJQUk5RCxxQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7UUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUFBLGlCQWVDO1FBZEEsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVUsS0FBTyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FB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OlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJ1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL2NsYXNzZXMvdGFzayc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFByb2plY3RzU2VydmljZSB7XG5cblx0cHJvamVjdHM6IFByb2plY3RbXTtcblx0cHJpdmF0ZSBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcblx0cHJpdmF0ZSBoZWFkZXJzQXV0aCA9IG5ldyBIZWFkZXJzKHt9KTtcblxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cblxuXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gIFx0Y29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcbiAgXHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG5cdH1cblxuXHRnZXRBbGwoKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcblx0XHRjb25zdCB1cmwgPSBcIi9wcm9qZWN0c1wiO1xuXHRcdGxldCB0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcblx0XHR0aGlzLmhlYWRlcnNBdXRoLmRlbGV0ZSgnQXV0aG9yaXphdGlvbicpO1xuXHRcdHRoaXMuaGVhZGVyc0F1dGguYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3Rva2VufWApO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5nZXQodXJsLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzQXV0aCwgYm9keTogJyd9KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRpZighdGhpcy5wcm9qZWN0cykge1xuXHRcdFx0XHRcdHRoaXMucHJvamVjdHMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnByb2plY3RzID0gXy5jbG9uZURlZXAocmVzLmpzb24oKSk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb2plY3RzO1xuXHRcdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByb2plY3QodGl0bGU6IFN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IHVybCA9IFwiL3Byb2plY3RzXCI7XG5cdFx0bGV0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuXHRcdHRoaXMuaGVhZGVyc0F1dGguYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdHRoaXMuaGVhZGVyc0F1dGguYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3Rva2VufWApO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkoe3RpdGxlOiB0aXRsZX0pLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzQXV0aH0pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGlmKCF0aGlzLnByb2plY3RzKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9qZWN0cyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucHJvamVjdHMucHVzaChyZXMuanNvbigpKVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVx0XG5cblx0ZWRpdFByb2plY3QoaWQ6IFN0cmluZywgcHJvamVjdDogT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3QgdXJsID0gYC9wcm9qZWN0cy8ke2lkfS9gO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRpZihpdGVtLl9pZCA9PT0gcmVzLl9pZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPSByZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZVByb2plY3QoaWQ6IFN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IHVybCA9IGAvcHJvamVjdHMvJHtpZH1gO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5kZWxldGUodXJsLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzLCBib2R5OiAnJ30pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZVRhc2soaWQ6IFN0cmluZywgdGFzazogT2JqZWN0KTogUHJvbWlzZTxUYXNrPiB7XG5cdFx0Y29uc3QgdXJsID0gYC9wcm9qZWN0cy8ke2lkfS90YXNrc2A7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxuXHRcdFx0LnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeSh0YXNrKSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xuXHRcdFx0fSlcblx0fVxuXG5cdGVkaXRUYXNrKGlkUHJvamVjdDogU3RyaW5nLCBpZFRhc2s6IFN0cmluZywgdGFzazogT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3QgdXJsID0gYC9wcm9qZWN0cy8ke2lkUHJvamVjdH0vdGFza3MvJHtpZFRhc2t9YDtcblx0XHRyZXR1cm4gdGhpcy5odHRwXG5cdFx0XHQucG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KHRhc2spLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcblx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZih0aGlzLnByb2plY3RzW2ldLl9pZCA9PT0gaWRQcm9qZWN0KSB7XG5cdFx0XHRcdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRpZih0aGlzLnByb2plY3RzW2ldLnRhc2tzW2pdLl9pZCA9PT0gaWRUYXNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9qZWN0c1tpXS50YXNrc1tqXSA9IHJlcy5qc29uKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlVGFzayhpZFByb2plY3Q6IFN0cmluZywgaWRUYXNrOiBTdHJpbmcpOiBQcm9taXNlPFRhc2s+IHtcblx0XHRjb25zdCB1cmwgPSBgL3Byb2plY3RzLyR7aWRQcm9qZWN0fS90YXNrcy8ke2lkVGFza31gO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5kZWxldGUodXJsLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzLCBib2R5OiAnJ30pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xuXHRcdFx0fSlcblx0fVxuXG5cdHByaW9yaXRpemVVcChpZFByb2plY3Q6IFN0cmluZywgaWRUYXNrOiBTdHJpbmcsIHRhc2s6IFRhc2spOiBQcm9taXNlPFRhc2s+IHtcblx0XHRjb25zdCB1cmwgPSBgL3Byb2plY3RzLyR7aWRQcm9qZWN0fS90YXNrcy8ke2lkVGFza30vcHJpb3JpdGl6ZVVwYDtcblx0XHRyZXR1cm4gdGhpcy5odHRwXG5cdFx0XHQucHV0KHVybCwge2hlYWRlcnM6IHRoaXMuaGVhZGVycywgYm9keTogJyd9KVxuXHRcdFx0LnRvUHJvbWlzZSgpXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcblx0XHRcdH0pXG5cdH1cblxuXHRwcmlvcml0aXplRG93bihpZFByb2plY3Q6IFN0cmluZywgaWRUYXNrOiBTdHJpbmcsIHRhc2s6IFRhc2spOiBQcm9taXNlPFRhc2s+IHtcblx0XHRjb25zdCB1cmwgPSBgL3Byb2plY3RzLyR7aWRQcm9qZWN0fS90YXNrcy8ke2lkVGFza30vcHJpb3JpdGl6ZURvd25gO1xuXHRcdHJldHVybiB0aGlzLmh0dHBcblx0XHRcdC5wdXQodXJsLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzLCBib2R5OiAnJ30pXG5cdFx0XHQudG9Qcm9taXNlKClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xuXHRcdFx0fSlcblx0fVxuXG5cdGNoYW5nZVN0YXR1cyhpZFByb2plY3Q6IFN0cmluZywgaWRUYXNrOiBTdHJpbmcsIHN0YXR1czogT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3QgdXJsID0gYC9wcm9qZWN0cy8ke2lkUHJvamVjdH0vdGFza3MvJHtpZFRhc2t9L2NoYW5nZVN0YXR1c2A7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxuXHRcdFx0LnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShzdGF0dXMpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcblx0XHRcdC50b1Byb21pc2UoKVxuXHRcdFx0LnRoZW4ocmVzID0+IHtcblxuXHRcdFx0fSlcblx0fVxuXG59Il19
