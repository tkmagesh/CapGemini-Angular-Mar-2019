import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class BugTrackerComponent{
	bugs : string[] = [];

	onAddNewClick(bugName : string){
		this.bugs.push(bugName);
	}
}