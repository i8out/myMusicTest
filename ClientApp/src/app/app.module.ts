import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MusicListComponent } from './music-list/music-list.component';
import { AddMusictrackComponent } from './add-musictrack/add-musictrack.component';
import { MusictracksService } from './musictracks.service';
import { windowProvider } from './window';
import { EditMusictrackComponent } from './edit-musictrack/edit-musictrack.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MusicListComponent,
    AddMusictrackComponent,
    EditMusictrackComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MusicListComponent, pathMatch: 'full' },
      { path: 'addmusictrack', component: AddMusictrackComponent },
      { path: 'editmusictrack/:id', component: EditMusictrackComponent }
    ])
  ],
  providers: [MusictracksService,
    windowProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
