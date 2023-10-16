import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  //add this to product-img src start//
  img_path: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?`);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?`);
  }
  getRecommendations(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?`
    );
  }
}
