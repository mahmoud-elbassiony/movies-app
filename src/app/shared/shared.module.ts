import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule, HttpClientModule],
  exports: [NavComponent, HttpClientModule],
})
export class SharedModule {}
