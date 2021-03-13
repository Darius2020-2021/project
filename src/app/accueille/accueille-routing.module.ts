import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueillePage } from './accueille.page';

const routes: Routes = [
  {
    path: '',
    component: AccueillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueillePageRoutingModule {}
