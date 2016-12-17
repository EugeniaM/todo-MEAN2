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
var todo_lists_component_1 = require('./todo-lists/todo-lists.component');
var new_project_component_1 = require('./new-project/new-project.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: todo_lists_component_1.TodoListsComponent },
    { path: 'newProject', component: new_project_component_1.NewProjectComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCxxQ0FBbUMsbUNBQW1DLENBQUMsQ0FBQTtBQUN2RSxzQ0FBb0MscUNBQXFDLENBQUMsQ0FBQTtBQUUxRSxJQUFNLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUN0RCxDQUFDO0FBT0Y7SUFBQTtJQUErQixDQUFDO0lBTGhDO1FBQUMsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUU7WUFDekMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtTQUN6QixDQUFDOzt3QkFBQTtJQUU2Qix1QkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsd0JBQWdCLG1CQUFHLENBQUEiLCJmaWxlIjoiYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvZG9MaXN0c0NvbXBvbmVudCB9IGZyb20gJy4vdG9kby1saXN0cy90b2RvLWxpc3RzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5ld1Byb2plY3RDb21wb25lbnQgfSBmcm9tICcuL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG5cdHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IFRvZG9MaXN0c0NvbXBvbmVudCB9LFxyXG5cdHsgcGF0aDogJ25ld1Byb2plY3QnLCBjb21wb25lbnQ6IE5ld1Byb2plY3RDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcykgXSxcclxuXHRleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fSJdfQ==
