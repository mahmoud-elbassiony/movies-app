import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  movieDetails: any;

  constructor(
    private requestServive: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.requestServive.getMovieById(635910).subscribe((data) => {
      this.movieDetails = data;
    });
  }
}
