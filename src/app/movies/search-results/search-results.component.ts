import { Component } from '@angular/core';
import { SearchResultsService } from 'src/app/shared/services/search-results/search-results.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  searchResults!: any;
  searchValue!: string;

  constructor(private searchResultsService: SearchResultsService) {}

  ngOnInit() {
    this.searchResultsService
      .getSearchResults()
      .subscribe((data) => (this.searchResults = data));

    this.searchResultsService
      .getSearchValue()
      .subscribe((data) => (this.searchValue = data));
  }
}
