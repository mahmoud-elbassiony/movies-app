import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  constructor(private route: Router, private requsetService: RequestService) {}
  redirectToSearch(search: any) {
    this.route.navigate(['search', search.value]);
  }
}
