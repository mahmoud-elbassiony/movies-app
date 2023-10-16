import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  @Input() movieDetails!: any;

  img_path: string = 'https://image.tmdb.org/t/p/w500/';
  stars: any[] = new Array(5);

  rating: number = 5;
}
