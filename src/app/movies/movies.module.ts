import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { moviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [moviesComponent, MovieComponent, MovieDetailsComponent, MoviePageComponent, RecommendationsComponent, HeroSectionComponent, SearchResultsComponent, SearchFormComponent],
  imports: [CommonModule],
   exports: [moviesComponent, MovieComponent, MovieDetailsComponent, MoviePageComponent],

})
export class MoviesModule {}
