import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueillePage } from './accueille.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AccueillePage,
    children: [
      {
        path: 'calender',
        loadChildren: () => import('../calender/calender.module').then( m => m.CalenderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calender',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calender',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueillePageRoutingModule {}
