import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [moviesComponent, MovieComponent],
  imports: [CommonModule],
})
export class MoviesModule {}
