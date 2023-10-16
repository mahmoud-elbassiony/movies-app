import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { moviesComponent } from './movies/movies/movies.component';
import { MoviePageComponent } from './movies/movie-page/movie-page.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NotfoundComponent } from './notfound/notfound.component';

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
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
