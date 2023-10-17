import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MovieDetails } from '../../interfaces/movie-details';
import { Movie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  movieData: ReplaySubject<MovieDetails>;
  movieRecommendations!: ReplaySubject<Movie[]>;
  constructor() {
    this.movieData = new ReplaySubject<MovieDetails>();
    this.movieRecommendations = new ReplaySubject<Movie[]>();
  }

  getMovieData() {
    return this.movieData.asObservable();
  }
  setMovieData(movie: MovieDetails) {
    this.movieData.next(movie);
  }

  getMovieRecommendations() {
    return this.movieRecommendations.asObservable();
  }
  setMovieRecommendations(movies: Movie[]) {
    this.movieRecommendations.next(movies);
  }
}
