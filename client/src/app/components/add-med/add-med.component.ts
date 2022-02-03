import { AddMedicineService } from './../../services/add-medicine.service';
import { Medicine } from './../../models/Medicine';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface Type {
  value: string;
  viewValue: string;
}
interface Concentration {
  value: string;
  viewValue: string;
}

interface Boolean {
  value: string;
  viewValue: string;
}

interface Size {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-med',
  templateUrl: './add-med.component.html',
  styleUrls: ['./add-med.component.scss']
})

export class AddMedComponent implements OnInit {
  medicines: Medicine[] = [];
  date = new FormControl(new Date());
  constructor(private _formBuilder: FormBuilder, private _router: Router ,private addMedicineService:AddMedicineService) { }
  formAddMedicine: FormGroup = new FormGroup({});
  serializedDate = new FormControl(new Date().toISOString());

  add(name:string,description:string,companyProvider:string,type:string,concentration:string,
    quantity:number,pharmprice:number,storeprice:number,discount:number,
    firmprice:number,brand:string,isavaliable:boolean,size:string,categorie:string,limit:number) {
    let medicine = new Medicine();
    medicine.name=name;
    medicine.description=description;
    medicine.companyProvider=companyProvider;
    medicine.type=type;
    medicine.concentration=concentration;
    // medicine.expDate=EXP;
    // medicine.arriveDate=Arrive;
    medicine.quantity=quantity;
    medicine.pharmPrice=pharmprice;
    medicine.storePrice=storeprice;
    medicine.discount=discount;
    medicine.firmPrice=firmprice;
    medicine.brand=brand;
    medicine.isAvailable=isavaliable;
    medicine.size=size;
    medicine.categories=new Array(categorie);
    medicine.limit=limit

    this.addMedicineService.addMedicine(medicine).subscribe(
      (response: any) => {
        console.log(response);
        this.medicines.push(medicine);
        alert(response.message)
      },
      (error) => { 
        alert(error.message)
      }
    );

  }

  ngOnInit() {
    this.formAddMedicine = this._formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', [Validators.required]],
      CompanyName: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      concentration: ['', [Validators.required]],
      Expiration: ['', [Validators.required]],
      ArriveDate: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      pharmPrice: ['', [Validators.required]],
      storePrice: ['', [Validators.required]],
      Discount: ['', [Validators.required]],
      FirmPrice: ['', [Validators.required]],
      Brand: ['', [Validators.required]],
      isAvailable: ['', [Validators.required]],
      Size: ['', [Validators.required]],
      Categories: ['', [Validators.required]],
      Limit: ['', [Validators.required]],
      
    });
  }

  types: Type[] = [
    { value: 'Capsule-0', viewValue: 'Capsule' },
    { value: 'Vial-1', viewValue: 'Vial' },
    { value: 'Ampoul-2', viewValue: 'Ampoul' },
    { value: 'Syrup-3', viewValue: 'Syrup' },
    { value: 'Susp-4', viewValue: 'Susp' },
    { value: 'Sachets-5', viewValue: 'Sachets' },
    { value: 'Sublungal-6', viewValue: 'Sublungal' },
    { value: 'Supp-7', viewValue: 'Supp' },
    { value: 'Gel-8', viewValue: 'Gel' },
    { value: 'Eay Drop-9', viewValue: 'Eay Drop' },
    { value: 'Ear Drop -10', viewValue: 'Ear Drop ' },
    { value: 'Oral Drop-11', viewValue: 'Oral Drop' },
  ];

  concentrations: Concentration[] = [
    { value: '10 MG-0', viewValue: '10 MG' },
    { value: '25 MG-1', viewValue: '25 MG' },
    { value: '15 MG-2', viewValue: '15 MG' },
    { value: '30 MG-3', viewValue: '30 MG' },
    { value: '50 MG-4', viewValue: '50 MG' },
    { value: '75 MG-5', viewValue: '75 MG' },
    { value: '100 MG-6', viewValue: '100 MG' },
    { value: '150 MG-7', viewValue: '150 MG' },
    { value: '250 MG-8', viewValue: '250 MG' },
    { value: '375 MG-9', viewValue: '375 MG' },
    { value: '400 MG-10', viewValue: '400 MG ' },
    { value: '500 MG-11', viewValue: '500 MG' },
    { value: '600 MG-11', viewValue: '600 MG' },
    { value: '625 MG-11', viewValue: '625 MG' },
    { value: '750 MG-11', viewValue: '750 MG' },
    { value: '1500 MG-11', viewValue: '1500 MG' },
    { value: '1 GM', viewValue: '1 GM' },
    { value: '1.2 GM', viewValue: '1.2 GM' },
    { value: '1.5 GM', viewValue: '1.5 GM' },
    { value: '2 GM', viewValue: '2 GM' },
    { value: '3 GM', viewValue: '3 GM' },
    { value: '4 GM', viewValue: '4 GM' },
    { value: '5 GM', viewValue: '5 GM' },
    { value: '2 MG/ML ', viewValue: '2 MG/ML ' },
    { value: '15 MG/ML', viewValue: '15 MG/ML' },
    { value: '75 MG/3 ML', viewValue: '75 MG/3 ML' },
    { value: '156.25 MG/5 ML', viewValue: '156.25 MG/5 ML' },
    { value: '228.5 MG/5 ML', viewValue: '228.5 MG/5 ML' },
    { value: '312.5 MG/5 ML', viewValue: '312.5 MG/5 ML' },
    { value: '457 MG/5 ML', viewValue: '457 MG/5 ML' },
    { value: '642.9 MG/5 ML', viewValue: '642.9 MG/5 ML' },

  ];
  booleans: Boolean[] = [
    { value: 'true-0', viewValue: 'true' },
    { value: 'false-1', viewValue: 'false' },

  ];
  sizes: Size[] = [
    { value: '10 MG-0', viewValue: '10 MG' },
    { value: '25 MG-1', viewValue: '25 MG' },
    { value: '15 MG-2', viewValue: '15 MG' },
    { value: '30 MG-3', viewValue: '30 MG' },
    { value: '50 MG-4', viewValue: '50 MG' },
    { value: '75 MG-5', viewValue: '75 MG' },
    { value: '100 MG-6', viewValue: '100 MG' },
    { value: '150 MG-7', viewValue: '150 MG' },
    { value: '250 MG-8', viewValue: '250 MG' },
    { value: '375 MG-9', viewValue: '375 MG' },
    { value: '400 MG-10', viewValue: '400 MG ' },
    { value: '500 MG-11', viewValue: '500 MG' },
    { value: '600 MG-11', viewValue: '600 MG' },
    { value: '625 MG-11', viewValue: '625 MG' },
    { value: '750 MG-11', viewValue: '750 MG' },
    { value: '1500 MG-11', viewValue: '1500 MG' },
    { value: '1 GM', viewValue: '1 GM' },
    { value: '1.2 GM', viewValue: '1.2 GM' },
    { value: '1.5 GM', viewValue: '1.5 GM' },
    { value: '2 GM', viewValue: '2 GM' },
    { value: '3 GM', viewValue: '3 GM' },
    { value: '4 GM', viewValue: '4 GM' },
    { value: '5 GM', viewValue: '5 GM' },
    { value: '2 MG/ML ', viewValue: '2 MG/ML ' },
    { value: '15 MG/ML', viewValue: '15 MG/ML' },
    { value: '75 MG/3 ML', viewValue: '75 MG/3 ML' },
    { value: '156.25 MG/5 ML', viewValue: '156.25 MG/5 ML' },
    { value: '228.5 MG/5 ML', viewValue: '228.5 MG/5 ML' },
    { value: '312.5 MG/5 ML', viewValue: '312.5 MG/5 ML' },
    { value: '457 MG/5 ML', viewValue: '457 MG/5 ML' },
    { value: '642.9 MG/5 ML', viewValue: '642.9 MG/5 ML' },

  ];


}
