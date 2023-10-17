import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/movie';
import { MovieDetails } from 'src/app/shared/interfaces/movie-details';
import { MovieDataService } from 'src/app/shared/services/movie-data/movie-data.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movieDetails!: MovieDetails;
  recommendations!: Movie[];
  watchList: any;

  constructor(
    private requestServive: RequestService,
    private route: ActivatedRoute,
    private watchListService: WatchListSService,
    private movieDataService: MovieDataService
  ) {}

  ngOnInit() {
    // this.requestServive
    //   .getMovieById(this.route.snapshot.params['id'])
    //   .subscribe((data) => {
    //     this.movieDetails = data;

    this.movieDataService.getMovieData().subscribe((data) => {
      this.movieDetails = data;

      // })
      console.log(this.movieDetails);

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

    // this.requestServive
    //   .getRecommendations(this.route.snapshot.params['id'])
    //   .subscribe((data) => {
    //     this.recommendations = data.results;
    //   });

    this.movieDataService.getMovieRecommendations().subscribe((data) => {
      this.recommendations = data.results;
      console.log(data);
    });
  }
}
