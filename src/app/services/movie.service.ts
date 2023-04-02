import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieType } from '../interfaces/movie-type.interface';
import { Observable, map } from 'rxjs';
import { ShowPreview } from '../interfaces/show/show-preview.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  imdbBaseUrl = 'https://imdb-api.com/en/API';
  apiKey = 'k_0gektdpv';

  constructor(private httpClient: HttpClient) {}

  getTrending(movieType: MovieType): Observable<ShowPreview[]> {
    return this.httpClient
      .get<ShowPreview[]>(`${this.imdbBaseUrl}/${movieType.key}/${this.apiKey}`)
      .pipe(
        map((response: any) => response.items.slice(0, 10) as ShowPreview[])
      );
  }
}
