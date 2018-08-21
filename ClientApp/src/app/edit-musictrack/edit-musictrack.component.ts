import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MusicTrack } from '../musictrack';
import { MusictracksService } from '../musictracks.service';
import { Genre } from '../Genre';

@Component({
  selector: 'app-edit-musictrack',
  templateUrl: './edit-musictrack.component.html',
  styleUrls: ['./edit-musictrack.component.css']
})
export class EditMusictrackComponent implements OnInit {
  @Input() musictrack: MusicTrack;
  public genres: Genre[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private musictracksService: MusictracksService) {
    this.musictracksService.getGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  ngOnInit(): void {
    this.getMusicTrack();
  }

  getMusicTrack(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.musictracksService.getMusicTrack(id)
      .subscribe(musictrack => this.musictrack = musictrack);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.musictracksService.updateMusicTrack(this.musictrack)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    var ans = confirm("Do you want to delete music track with Id: " + this.musictrack.id);
    if (ans) {
      this.musictracksService.deleteMusicTrack(this.musictrack.id).subscribe(() => this.goBack());
    }
  }
}
