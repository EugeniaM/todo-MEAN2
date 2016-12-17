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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9vcmRlci1ieS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFNcEQ7SUFBQTtJQTJCQSxDQUFDO0lBMUJBLCtCQUFTLEdBQVQsVUFBVSxLQUFpQixFQUFFLFVBQWtCO1FBQzlDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXRCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDcEIsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQTlCRjtRQUFDLFdBQUksQ0FBQztZQUNMLElBQUksRUFBRSxTQUFTO1NBQ2YsQ0FBQzs7bUJBQUE7SUE2QkYsa0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLG1CQUFXLGNBMkJ2QixDQUFBIiwiZmlsZSI6ImFwcC9waXBlcy9vcmRlci1ieS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdvcmRlckJ5J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKGFycmF5OiBBcnJheTxhbnk+LCBvcmRlclZhbHVlOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcclxuXHRcdGlmKCFvcmRlclZhbHVlIHx8IG9yZGVyVmFsdWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0XHRyZXR1cm4gYXJyYXk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9yZGVyVHlwZSA9IFwiYXNjXCI7XHJcblxyXG5cdFx0aWYob3JkZXJWYWx1ZVswXSA9PT0gJy0nKSB7XHJcblx0XHRcdG9yZGVyVmFsdWUgPSBvcmRlclZhbHVlLnN1YnN0cmluZygxKTtcclxuXHRcdFx0b3JkZXJUeXBlID0gJ2Rlc2MnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0aWYgKG9yZGVyVHlwZSA9PT0gJ2FzYycpIHtcclxuXHRcdFx0XHRpZihhW29yZGVyVmFsdWVdIDwgYltvcmRlclZhbHVlXSkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdGlmKGFbb3JkZXJWYWx1ZV0gPiBiW29yZGVyVmFsdWVdKSByZXR1cm4gMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZihhW29yZGVyVmFsdWVdID4gYltvcmRlclZhbHVlXSkgcmV0dXJuIC0xO1xyXG5cdFx0XHRcdGlmKGFbb3JkZXJWYWx1ZV0gPCBiW29yZGVyVmFsdWVdKSByZXR1cm4gMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxufSJdfQ==
