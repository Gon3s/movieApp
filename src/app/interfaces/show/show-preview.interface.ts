import { Director } from './director.interface';
import { Genre } from './genre.interface';
import { Star } from './star.interface';

export interface ShowPreview {
  id: string;
  title: string;
  fullTitle: string;
  year: number;
  releaseState: Date;
  image: string;
  runtimeMins: number;
  runtimeStr: string;
  plot: string;
  contentRating: string;
  imDbRating: number;
  imDbRatingCount: number;
  metacriticRating: number;
  genres: string;
  genreList: Genre[];
  directors: string;
  directorList: Director[];
  stars: string;
  starList: Star[];
  crew: string;
}
