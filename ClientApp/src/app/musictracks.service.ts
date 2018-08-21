import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { MusicTrack } from "./musictrack";
import { Genre } from './Genre';

@Injectable()
export class MusictracksService {

  constructor(private httpClient: HttpClient) { }

  // Getting a music track
  getMusicTrack(id: number) {
    return this.httpClient.get<MusicTrack>('/api/MusicTracks/' + id);
  }

  // Getting the list of music tracks
  getMusicTracks(): Observable<MusicTrack[]> {
    return this.httpClient.get<MusicTrack[]>('/api/MusicTracks');
  }

  // Adding a new music track by calling post
  addMusicTrack(musictrack: MusicTrack) {
    return this.httpClient.post('/api/MusicTracks', musictrack);
  }

  // Update a music track by calling put
  updateMusicTrack(musictrack: MusicTrack) {
    return this.httpClient.put('/api/MusicTracks/' + musictrack.id, musictrack);
  }

  // Delete a music track
  deleteMusicTrack(id: number) {
    return this.httpClient.delete('/api/MusicTracks/' + id);
  }

  // Getting the genres
  getGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>('/api/MusicTracks/Genres');
  }
}
