import { Component } from '@angular/core';
import { ErrorService } from '../services/error-service/error.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent {
  errorCode!: number;
  errorMsg!: string;
  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.getErrorMsg().subscribe((data) => (this.errorMsg = data));
    this.errorService
      .getErrorCode()
      .subscribe((data) => (this.errorCode = data));
  }
}
