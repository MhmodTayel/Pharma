import { Injectable } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  constructor(private apiService :ApiService) { }

  addMedicine(medicine : any ){
    return this.apiService.post(`/store/medicine/add`, medicine)
  }
  // getById(url:string){
  //   return this.apiService.get(url);
  //  }
  // update(id:string,medicine:FormData){
  //   return this.apiService.patch(`/store/medicine/${id}`,medicine);
  //  }

}
