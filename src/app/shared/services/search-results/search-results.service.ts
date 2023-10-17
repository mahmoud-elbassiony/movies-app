import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsService {
  searchResults: BehaviorSubject<any>;
  searchValue!: BehaviorSubject<string>;

  constructor() {
    this.searchResults = new BehaviorSubject<any>({});
    this.searchValue = new BehaviorSubject<string>('');
  }

  getSearchResults() {
    return this.searchResults.asObservable();
  }

  getSearchValue() {
    return this.searchValue.asObservable();
  }

  setSearchResults(s: any) {
    this.searchResults.next(s);
  }

  setSearchValue(value: string) {
    this.searchValue.next(value);
  }
}
