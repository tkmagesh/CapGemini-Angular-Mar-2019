import { Injectable } from '@angular/core';

import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService,
		private bugApi : BugApiService){

	}
	createNew(bugName : string) : Observable<Bug> {
		let newBug : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugApi
			.save(newBug);
	}

	toggle(bugToToggle: Bug) : Observable<Bug>{
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugApi
			.save(toggledBug);
	}

	getAll() : Observable<Bug[]>{
		return this.bugApi.getAll();
	}

	remove(bug : Bug) : Observable<any>{
		return this.bugApi
			.remove(bug);
	}
}