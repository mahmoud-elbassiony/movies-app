import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlistempty',
  templateUrl: './watchlistempty.component.html',
  styleUrls: ['./watchlistempty.component.css'],
})
export class WatchlistemptyComponent {
  constructor(private router: Router) {}
}
