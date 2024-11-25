import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  centers: VaccinationCenter[] =[
    {id:1, name:"Hopital Central", address: "Rue Leclerc", city:"Nancy",postalCode:"54000",openingDate: new Date("02-03-2021")},
    {id:2, name:"Hopital de Banlieue", address: "Chemin Perdu", city:"loin",postalCode:"54689", openingDate: new Date("05-07-2019")},
  ]

  constructor() { }

  getAllVaccinationCenter() : VaccinationCenter[]{
    return this.centers;
  }

  getCenterById(id: Number) : VaccinationCenter | undefined{
    return this.centers.find(c=>c.id==id);
  }
}
