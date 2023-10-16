import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [moviesComponent, MovieComponent, MovieDetailsComponent, MoviePageComponent],
  imports: [CommonModule],
   exports: [moviesComponent, MovieComponent, MovieDetailsComponent, MoviePageComponent],

})
export class MoviesModule {}
