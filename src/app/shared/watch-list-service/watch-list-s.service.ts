import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchListSService {
  watchList: BehaviorSubject<any[]>;
  constructor() {
    this.watchList = new BehaviorSubject<any[]>([]);
  }

  getWatchList() {
    return this.watchList.asObservable();
  }

  toggleWatchList(movie: any) {
    let index = this.watchList.value.findIndex((mov) => mov.id === movie.id);

    if (index != -1) {
      movie.isInWatchList = false;
      this.watchList.value.splice(index, 1);
    } else {
      movie.isInWatchList = true;
      this.watchList.value.push(movie);
    }
    this.watchList.next(this.watchList.value);
  }
}
