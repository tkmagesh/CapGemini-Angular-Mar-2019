import { Component, ViewEncapsulation } from '@angular/core';

import { Bug } from './models/Bug';

import { BugOperationsService}  from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class BugTrackerComponent{
	//bugs : Bug[] = [];

	bugs : Array<Bug> = new Array<Bug>();

	bugSortBy : string = 'name';
	bugSortDesc : boolean = false;

	

	constructor(private bugOperations : BugOperationsService){
		//Fix this
		this.bugs = this.bugOperations.getAll();
	}

	onNewBugAdded(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
			
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}