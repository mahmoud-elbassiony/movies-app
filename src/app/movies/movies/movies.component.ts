import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-products',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class moviesComponent implements OnInit {
  movies!: any;
  img_path: string = '';
  watchList: any;
  constructor(
    private requestService: RequestService,
    private watchListService: WatchListSService
  ) {}
  ngOnInit() {
    this.requestService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.img_path = this.requestService.img_path;
      this.watchListService.getWatchList().subscribe((wl) => {
        this.watchList = wl;
        for (let j = 0; j < this.movies.length; j++) {
          for (let i = 0; i < this.watchList.length; i++) {
            if (this.movies[j].id == this.watchList[i].id) {
              this.movies[j].isInWatchList = true;
              break;
            } else {
              this.movies[j].isInWatchList = false;
            }
          }
        }
      });
    });
  }
}
