import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WatchlistemptyComponent } from './watchlistempty/watchlistempty.component';
import { WatchlistcardComponent } from './watchlistcard/watchlistcard.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, WatchlistComponent, WatchlistemptyComponent, WatchlistcardComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NgbModule,
  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
