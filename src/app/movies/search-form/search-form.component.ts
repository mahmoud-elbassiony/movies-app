import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';
import { SearchResultsService } from 'src/app/shared/services/search-results/search-results.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  searchResults!: any;
  test: string = 'test';
  constructor(
    private route: Router,
    private requsetService: RequestService,
    private searchService: SearchResultsService
  ) {}

  searchFn(search: any) {
    this.requsetService.getSearchResults(search.value).subscribe((data) => {
      this.searchService.setSearchResults(data);
    });

    this.searchService.setSearchValue(search.value.trim());
    this.route.navigate(['search']);
  }
}
