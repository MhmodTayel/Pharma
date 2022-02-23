import { Injectable } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private _api:ApiService) { }
  getAllMedicines(){
    return this._api.get('/store/medicine/getAll')
  }

  addMedicine(medicine : any ){
    return this._api.post(`/store/medicine/add`, medicine)
  }
  deleteMed(id: any){
    return this._api.delete(`/store/medicine/delete/${id}`);

  }
  getDetails(id:string|null){
    return this._api.get(`/store/medicine/details/${id}`);
  } 
  update(id:any,medicine:any){
  return this._api.patch(`/store/medicine/${id}`,medicine);
  }

  todayIncomingMeds(){
    return this._api.get(`/store/today-incoming-medicine`);
  }
  weekIncomingMeds(){
    return this._api.get(`/store/weekly-incoming-medicine`);
  }

      
}
