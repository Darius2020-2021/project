import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilleComponent } from './accueille/accueille.component';
import { HeadAccueilleComponent } from './head-accueille/head-accueille.component';
import { BodyAccueilleComponent } from './body-accueille/body-accueille.component';
import { EndAccueilleComponent } from './end-accueille/end-accueille.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilleComponent,
    HeadAccueilleComponent,
    BodyAccueilleComponent,
    EndAccueilleComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
