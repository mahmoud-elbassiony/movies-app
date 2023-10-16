import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  img_path = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie!: any;
  roundNum(num: number) {
    return Math.round(num);
  }
}
