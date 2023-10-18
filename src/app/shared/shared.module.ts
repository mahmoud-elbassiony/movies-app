import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './interceptors/http.interceptor';
import { SeparatePipe } from './pipes/separate/separate.pipe';
import { ErrorInterceptor } from './interceptors/error-interceptor/error.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [NavComponent, SeparatePipe, NotfoundComponent],

  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
  ],
  exports: [
    NavComponent,
    HttpClientModule,
    RouterLink,
    RouterModule,
    SeparatePipe,
    NotfoundComponent,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
