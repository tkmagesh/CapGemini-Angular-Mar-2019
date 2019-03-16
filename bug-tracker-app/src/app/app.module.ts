import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugOperationsService} from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';

import { ClosedCountPipe } from './bugTracker/pipes/clsoedCount.pipe';
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , TrimTextPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
