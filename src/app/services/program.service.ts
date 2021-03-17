import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  //times gloal:
  hour1:"8h-10:45"
  hour2:"11h-12:45"
  hour3:"14h-16:45"

//program LPIG1
  //semestre1...
  excel:"Excel"
  maint:"Maintenace"
  Word:"Word"
  fr:"Français"
  math:"Mathématique"
  arch:"Architecture d'ordinateur"
  ang:"Anglais"
  it:"IT Essentiel"
  //semestre2...
  constructor() { }
}
