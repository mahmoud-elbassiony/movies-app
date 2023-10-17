import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  searchResults!: any;
  searchWord!: string;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.searchWord = this.route.snapshot.params['movie-name'];
    this.requestService
      .getSearchResults(this.route.snapshot.params['movie-name'])
      .subscribe((data) => (this.searchResults = data));
  }
}
