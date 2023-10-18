import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/movie';
import { MovieDataService } from 'src/app/shared/services/movie-data/movie-data.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';
// import {
//   ProgressSpinnerMode,
//   MatProgressSpinnerModule,
// } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  img_path = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie!: Movie;
  watchList!: any;

  color: string = '#ddd';

  constructor(
    private route: Router,
    private watchListService: WatchListSService,
    private requestService: RequestService,
    private movieDataService: MovieDataService
  ) {}

  redirect(e: any, a: any, id: number) {
    if (e.target !== a) {
      this.route.navigate(['movie-details', id]);
      this.requestService.getMovieById(id).subscribe((data) => {
        this.movieDataService.setMovieData(data);
      });

      this.requestService
        .getRecommendations(id)
        .subscribe((data) =>
          this.movieDataService.setMovieRecommendations(data.results)
        );
    }
  }
  toggleWatchList(movie: Movie) {
    this.watchListService.toggleWatchList(movie);
  }

  roundNum(num: number) {
    return Math.round(num);
  }
}
