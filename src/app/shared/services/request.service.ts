import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WatchListSService } from '../watch-list-service/watch-list-s.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  //add this to product-img src start//
  img_path: string = 'https://image.tmdb.org/t/p/w500/';

  watchList!: any;

  constructor(
    private http: HttpClient,
    private watchListService: WatchListSService
  ) {
    this.watchListService
      .getWatchList()
      .subscribe((data) => (this.watchList = data));
  }

  getMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?`);
    // .pipe(
    //   map((data: any) =>
    //     data.map((item: any) => {
    //       console.log(item);
    //       console.log(this.watchList);
    //     })
    //   )
    // );
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?`);
  }
  getRecommendations(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?`
    );
  }
  getSearchResults(movieName: string) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?', {
      params: { query: movieName },
    });
  }
}
