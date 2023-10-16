import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class moviesComponent implements OnInit {
  movies!: any;
  img_path: string = '';
  constructor(private requestService: RequestService) {}
  ngOnInit() {
    this.requestService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.img_path = this.requestService.img_path;
    });
  }
}
