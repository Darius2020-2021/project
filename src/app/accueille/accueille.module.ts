import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueillePageRoutingModule } from './accueille-routing.module';

import { AccueillePage } from './accueille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueillePageRoutingModule
  ],
  declarations: [AccueillePage]
})
export class AccueillePageModule {}
