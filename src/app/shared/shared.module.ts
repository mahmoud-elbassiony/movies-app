import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './interceptors/http.interceptor';

@NgModule({
  declarations: [NavComponent],

  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink,
    RouterModule,
  ],
  exports: [NavComponent, HttpClientModule, RouterLink, RouterModule],

  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
 

})
export class SharedModule {}
