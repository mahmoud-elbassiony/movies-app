import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  movieData: BehaviorSubject<any>;
  movieRecommendations: BehaviorSubject<any>;
  constructor() {
    this.movieData = new BehaviorSubject<any>({});
    this.movieRecommendations = new BehaviorSubject<any>({});
  }

  getMovieData() {
    return this.movieData.asObservable();
  }
  setMovieData(movie: any) {
    this.movieData.next(movie);
  }

  getMovieRecommendations() {
    return this.movieRecommendations.asObservable();
  }
  setMovieRecommendations(movie: any) {
    this.movieRecommendations.next(movie);
  }
}
