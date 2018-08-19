import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MusictracksService } from '../musictracks.service';
import { MusicTrack } from "../musictrack";

@Component({
  selector: 'app-add-musictrack',
  templateUrl: './add-musictrack.component.html',
  styleUrls: ['./add-musictrack.component.css']
})
export class AddMusictrackComponent {

  public genres: string[];
  public musictrack: MusicTrack = {};

  constructor(
    private router: Router,
    private musictracksSvc: MusictracksService) {
    this.genres = [
      "Broadway",
      "Classical",
      "Disco",
      "Opm",
      "Pop"
    ];
  }

  addMusicTrack() {
    this.musictracksSvc.addMusicTrack(this.musictrack)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
