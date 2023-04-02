import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MovieType } from 'src/app/interfaces/movie-type.interface';
import { ShowPreview } from 'src/app/interfaces/show/show-preview.interface';
import { MovieService } from 'src/app/services/movie.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  standalone: true,
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrendingsComponent implements OnInit {
  @Input() type!: MovieType;
  items: ShowPreview[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getTrending(this.type).subscribe((response) => {
      this.items = response;
    });
  }
}
