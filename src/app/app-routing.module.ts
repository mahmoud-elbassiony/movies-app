import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define your routes as an array of objects
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
