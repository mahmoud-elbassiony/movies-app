import { Component } from '@angular/core';
import { WatchListSService } from '../watch-list-service/watch-list-s.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  watchListCounter!: number;
  progressValue: any;
  colorValue: any;
  constructor(
    private watchListSService: WatchListSService,
    public loadersevice: LoaderService
  ) {}

  ngOnInit() {
    this.watchListSService
      .getWatchList()
      .subscribe((data) => (this.watchListCounter = data.length));
  }
}
