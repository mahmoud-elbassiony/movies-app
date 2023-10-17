import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watchlistcard',
  templateUrl: './watchlistcard.component.html',
  styleUrls: ['./watchlistcard.component.css'],
})
export class WatchlistcardComponent {
  starRating = 0;
  @Input() item: any;
}
