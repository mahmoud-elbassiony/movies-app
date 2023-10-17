import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/app/shared/interfaces/movie-details';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  @Input() movieDetails!: MovieDetails;
  img_path: string = 'https://image.tmdb.org/t/p/w500/';
  stars: any[] = new Array(5);

  constructor(private watchListService: WatchListSService) {}

  toggleWatchList(movie: any) {
    this.watchListService.toggleWatchList(movie);
  }
}
