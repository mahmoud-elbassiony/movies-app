import { Component } from '@angular/core';
import { WatchListSService } from '../shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  starRating = 0;
  movies!: any;
  constructor(private WatchList: WatchListSService) {}

  ngOnInit() {
    this.WatchList.getWatchList().subscribe(
      (data: any) => (this.movies = data)
    );
  }
}
