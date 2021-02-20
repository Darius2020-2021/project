import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilleComponent } from './accueille/accueille.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:'', component:AccueilleComponent},
  {path:'inscrip', component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
