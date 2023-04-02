import { Injectable } from '@angular/core';
import { MovieType } from '../interfaces/movie-type.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieConstants {
  public MOVIES: MovieType = {
    key: 'MostPopularMovies',
    title: 'Movies',
  };
  public TV: MovieType = {
    key: 'MostPopularTVs',
    title: 'TV Shows',
  };
  public THEATRE: MovieType = {
    key: 'InTheaters',
    title: 'Theatre',
  };
}
