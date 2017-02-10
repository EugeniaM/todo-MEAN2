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
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderValue) {
        if (!orderValue || orderValue.trim() === '') {
            return array;
        }
        var orderType = "asc";
        if (orderValue[0] === '-') {
            orderValue = orderValue.substring(1);
            orderType = 'desc';
        }
        array.sort(function (a, b) {
            if (orderType === 'asc') {
                if (a[orderValue] < b[orderValue])
                    return -1;
                if (a[orderValue] > b[orderValue])
                    return 1;
                return 0;
            }
            else {
                if (a[orderValue] > b[orderValue])
                    return -1;
                if (a[orderValue] < b[orderValue])
                    return 1;
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9vcmRlci1ieS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFNcEQ7SUFBQTtJQTJCQSxDQUFDO0lBMUJBLCtCQUFTLEdBQVQsVUFBVSxLQUFpQixFQUFFLFVBQWtCO1FBQzlDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXRCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQTlCRjtRQUFDLFdBQUksQ0FBQztZQUNMLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQzs7bUJBQUE7SUE2QkYsa0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLG1CQUFXLGNBMkJ2QixDQUFBIiwiZmlsZSI6ImFwcC9waXBlcy9vcmRlci1ieS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdvcmRlckJ5J1xufSlcblxuZXhwb3J0IGNsYXNzIE9yZGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShhcnJheTogQXJyYXk8YW55Piwgb3JkZXJWYWx1ZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG5cdFx0aWYoIW9yZGVyVmFsdWUgfHwgb3JkZXJWYWx1ZS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fVxuXG5cdFx0dmFyIG9yZGVyVHlwZSA9IFwiYXNjXCI7XG5cblx0XHRpZihvcmRlclZhbHVlWzBdID09PSAnLScpIHtcblx0XHRcdG9yZGVyVmFsdWUgPSBvcmRlclZhbHVlLnN1YnN0cmluZygxKTtcblx0XHRcdG9yZGVyVHlwZSA9ICdkZXNjJztcblx0XHR9XG5cblx0XHRhcnJheS5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAob3JkZXJUeXBlID09PSAnYXNjJykge1xuXHRcdFx0XHRpZihhW29yZGVyVmFsdWVdIDwgYltvcmRlclZhbHVlXSkgcmV0dXJuIC0xO1xuXHRcdFx0XHRpZihhW29yZGVyVmFsdWVdID4gYltvcmRlclZhbHVlXSkgcmV0dXJuIDE7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoYVtvcmRlclZhbHVlXSA+IGJbb3JkZXJWYWx1ZV0pIHJldHVybiAtMTtcblx0XHRcdFx0aWYoYVtvcmRlclZhbHVlXSA8IGJbb3JkZXJWYWx1ZV0pIHJldHVybiAxO1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBhcnJheTtcblx0fVxufSJdfQ==
