import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { moviesComponent } from './movies/movies/movies.component';
import { MoviePageComponent } from './movies/movie-page/movie-page.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { SearchResultsComponent } from './movies/search-results/search-results.component';

// Define your routes as an array of objects

// Define your routes as an array of objects
const routes: Routes = [
  { path: '', component: moviesComponent },
  { path: 'movie-details/:id', component: MoviePageComponent },
  {
    path: 'watch-list',
    component: WatchlistComponent,
  },
  {
    // path: 'search/:movie-name',
    path: 'search',
    component: SearchResultsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
