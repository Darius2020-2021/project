import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueillePage } from './accueille.page';

const routes: Routes = [
  {
    path: '',
    component: AccueillePage,
    children: [
      {
        path: 'calender',
        loadChildren: () => import('../calender/calender.module').then( m => m.CalenderPageModule)
      },
      
      {
        path: 'note',
        loadChildren: () => import('../note/note.module').then( m => m.NotePageModule)
      },
      {
        path:'present',
        loadChildren: () => import('../present/present.module').then( m => m.PresentPageModule)
      },
      {
        path:'pay',
        loadChildren: () => import('../pay/pay.module').then( m => m.PayPageModule)
      },
      {
        path: '',
        redirectTo: '/ac/calender',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/ac/calender',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueillePageRoutingModule {}
