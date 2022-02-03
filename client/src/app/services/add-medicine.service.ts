import { Medicine } from './../models/Medicine';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private apiService :ApiService) { }

  addMedicine(medicine : Medicine ){
    return this.apiService.post(`/medicine/add`, medicine)
  }
}
