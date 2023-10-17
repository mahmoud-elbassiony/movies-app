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
}
