import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MusictracksService } from '../musictracks.service';
import { MusicTrack } from "../musictrack";
import { Genre } from "../genre";

@Component({
  selector: 'app-add-musictrack',
  templateUrl: './add-musictrack.component.html',
  styleUrls: ['./add-musictrack.component.css']
})
export class AddMusictrackComponent {

  public genres: Genre[];
  public musictrack: MusicTrack = {};

  constructor(
    private router: Router,
    private musictracksSvc: MusictracksService) {
    this.musictracksSvc.getGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  addMusicTrack() {
    this.musictracksSvc.addMusicTrack(this.musictrack)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
