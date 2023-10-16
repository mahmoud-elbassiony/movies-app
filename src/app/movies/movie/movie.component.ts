import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  img_path = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie!: any;
  watchList!: any;

  constructor(
    private route: Router,
    private watchListService: WatchListSService
  ) {}

  redirect(e: any, a: any, b: any, id: number) {
    if (e.target !== a && e.target !== b) {
      this.route.navigate(['movie-details', id]);
    }
  }
  toggleWatchList(movie: any) {
    this.watchListService.toggleWatchList(movie);
    console.log(movie);
  }
}
