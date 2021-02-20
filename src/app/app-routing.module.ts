import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadAccueilleComponent } from './head-accueille/head-accueille.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:'', component:HeadAccueilleComponent},
  {path:'inscrip', component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
