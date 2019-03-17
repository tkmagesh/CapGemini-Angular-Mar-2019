import { Component, ViewEncapsulation } from '@angular/core';

import { Bug } from './models/Bug';

import { BugOperationsService}  from './services/bugOperations.service';

import axios from 'axios';


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
		/*var p1 = axios.get('http://localhost:3000/bugs');
		var p2 = p1.then(response => response.data);
		p2.then(data => this.bugs = data);*/

		/*axios
			.get('http://localhost:3000/bugs')
			.then(response => response.data)
			.then(data => this.bugs = data);*/

		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBugAdded(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations
					.remove(closedBug)
					.then(() => this.bugs = this.bugs.filter(bug => bug !== closedBug));
			})
	}

	
}