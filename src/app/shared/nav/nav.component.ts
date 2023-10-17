import { Component } from '@angular/core';
import { WatchListSService } from '../watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  watchListCounter!: number;
  constructor(private watchListSService: WatchListSService) {}

  ngOnInit() {
    this.watchListSService
      .getWatchList()
      .subscribe((data) => (this.watchListCounter = data.length));
  }
}
