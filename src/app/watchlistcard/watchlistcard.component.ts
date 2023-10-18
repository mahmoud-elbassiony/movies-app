import { WatchListSService } from './../shared/watch-list-service/watch-list-s.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watchlistcard',
  templateUrl: './watchlistcard.component.html',
  styleUrls: ['./watchlistcard.component.css'],
})
export class WatchlistcardComponent {
  img_path: string = 'https://image.tmdb.org/t/p/w500/';
  stars: any[] = new Array(5);
  @Input() item: any;
  constructor(private watchListSService: WatchListSService) {}
  toggleWatchList(movie: any) {
    this.watchListSService.toggleWatchList(movie);
  }
}
