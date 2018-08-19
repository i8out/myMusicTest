import { Component, OnInit, Inject } from '@angular/core';
import { MusictracksService } from '../musictracks.service';
import { MusicTrack } from "../musictrack";
import { windowProvider } from '../window';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  public musictracks: MusicTrack[];

  constructor(private musictracksService: MusictracksService,
    @Inject(windowProvider.provide) private window: Window) { }

  ngOnInit() {
    this.musictracksService.getMusicTracks()
      .subscribe(musictracks => {
        this.musictracks = musictracks;
      });
  }
}
