import { Bug } from '../models/Bug';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(list: Bug[], args: any[]): number {
		return list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}