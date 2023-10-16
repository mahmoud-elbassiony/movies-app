import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  declarations: [MovieDetailsComponent, MoviePageComponent],
  imports: [CommonModule],
  exports: [MovieDetailsComponent, MoviePageComponent],
})
export class MoviesModule {}
