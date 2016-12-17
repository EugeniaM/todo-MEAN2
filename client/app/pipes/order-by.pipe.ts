import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
	transform(array: Array<any>, orderValue: string): Array<any> {
		if(!orderValue || orderValue.trim() === '') {
			return array;
		}

		var orderType = "asc";

		if(orderValue[0] === '-') {
			orderValue = orderValue.substring(1);
			orderType = 'desc';
		}

		array.sort((a, b) => {
			if (orderType === 'asc') {
				if(a[orderValue] < b[orderValue]) return -1;
				if(a[orderValue] > b[orderValue]) return 1;
				return 0;
			} else {
				if(a[orderValue] > b[orderValue]) return -1;
				if(a[orderValue] < b[orderValue]) return 1;
				return 0;
			}
		});

		return array;
	}
}