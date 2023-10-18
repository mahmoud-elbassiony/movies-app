import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AppRoutingModule } from './app-routing.module';
import { WatchlistemptyComponent } from './watchlistempty/watchlistempty.component';
import { WatchlistcardComponent } from './watchlistcard/watchlistcard.component';

import { MoviesModule } from './movies/movies.module';
import { LoaderComponent } from './loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderinterceptorInterceptor } from './shared/interceptors/loaderinterceptor.interceptor';
import { NotfoundComponent } from './shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    WatchlistemptyComponent,
    WatchlistcardComponent,
    NotfoundComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MoviesModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderinterceptorInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
