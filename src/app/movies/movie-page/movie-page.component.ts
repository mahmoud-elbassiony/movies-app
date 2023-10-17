import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movieDetails: any;
  recommendations!: any[];
  watchList: any;

  constructor(
    private requestServive: RequestService,
    private route: ActivatedRoute,
    private watchListService: WatchListSService
  ) {}

  ngOnInit() {
    this.requestServive
      .getMovieById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.movieDetails = data;
        this.watchListService.getWatchList().subscribe((wl) => {
          this.watchList = wl;

          for (let i = 0; i < this.watchList.length; i++) {
            if (this.movieDetails.id == this.watchList[i].id) {
              this.movieDetails.isInWatchList = true;
              break;
            } else {
              this.movieDetails.isInWatchList = false;
            }
          }
        });
      });

    this.requestServive
      .getRecommendations(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.recommendations = data.results;
        console.log(data);
        console.log(this.recommendations);
      });
  }
}
