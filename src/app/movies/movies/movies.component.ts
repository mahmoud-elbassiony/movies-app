import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie';
import { ErrorService } from 'src/app/shared/services/error-service/error.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { WatchListSService } from 'src/app/shared/watch-list-service/watch-list-s.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class moviesComponent implements OnInit {
  movies!: Movie[];
  img_path: string = '';
  watchList: any;
  pageNum: number = 1;
  pagesNum: number = 300;
  pagination!: any;
  errorMessage!: string;
  errorCode!: string;
  constructor(
    private requestService: RequestService,
    private watchListService: WatchListSService,
    public errorService: ErrorService
  ) {}

  scroll() {
    window.scrollTo(0, 289);
  }
  ngOnInit() {
    this.requestService.getAllMovies(this.pageNum).subscribe(
      (data: any) => {
        this.movies = data.results;
        this.img_path = this.requestService.img_path;
        // this.pagesNum = data.total_pages;
        this.pagination = new Array(7);
        this.watchListService.getWatchList().subscribe((wl) => {
          this.watchList = wl;
          for (let j = 0; j < this.movies?.length; j++) {
            for (let i = 0; i < this.watchList?.length; i++) {
              if (this.movies[j].id == this.watchList[i].id) {
                this.movies[j].isInWatchList = true;
                break;
              } else {
                this.movies[j].isInWatchList = false;
              }
            }
          }
        });
      },

      (error) => {
        this.errorMessage = error.status_message;
        this.errorCode = error.status_code;
      }
    );
  }

  goToAnotherPage(e: any) {
    this.pageNum = e.target.textContent;

    this.requestService.getAllMovies(this.pageNum).subscribe((data: any) => {
      this.movies = data.results;
      this.scroll();
    });
  }
  handleNext(e: Event) {
    e.preventDefault();
    if (this.pageNum < this.pagesNum)
      this.requestService
        .getAllMovies(++this.pageNum)
        .subscribe((data: any) => {
          this.movies = data.results;
          this.scroll();
        });
  }
  handlePrevious(e: Event) {
    e.preventDefault();
    if (this.pageNum !== 1) {
      this.requestService
        .getAllMovies(--this.pageNum)
        .subscribe((data: any) => {
          this.movies = data.results;
          this.scroll();
        });
    }
  }
}
