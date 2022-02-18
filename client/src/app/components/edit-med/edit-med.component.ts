import { MedicineService } from './../../services/medicineService/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import {Medicine} from "../../models/Medicine";

interface Type {
  value: string;
  viewValue: string;
}
interface Concentration {
  value: string;
  viewValue: string;
}

interface Boolean {
  value: boolean;
  viewValue: string;
}

interface Size {
  value: string;
  viewValue: string;
}

export interface Categorie {
  name: string;
}
@Component({
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.scss']
})
export class EditMedComponent implements OnInit {

  date = new FormControl(new Date());
  medicines : Medicine = new Medicine();
  constructor(
    private _formBuilder: FormBuilder, 
    private _router: Router ,
    private addMedicineService:MedicineService,
    private _ativatedRoute:ActivatedRoute) { }

  formAddMedicine: FormGroup = new FormGroup({});
  serializedDate = new FormControl(new Date().toISOString());
  imagePreview: string = '';
  receviedImg:string=''
  ID:number=0
  _id:string=''
  
  onSubmit() {
    if (this.formAddMedicine.valid) {
      const medData = new FormData();

      medData.append('name', this.formAddMedicine.value.name);
      medData.append('description', this.formAddMedicine.value.description);
      medData.append('companyProvider', this.formAddMedicine.value.companyProvider);
      medData.append('type', this.formAddMedicine.value.type);
      medData.append('concentration', this.formAddMedicine.value.concentration);
      medData.append('expDate', this.formAddMedicine.value.expDate);
      medData.append('arriveDate', this.formAddMedicine.value.arriveDate);
      medData.append('quantity', this.formAddMedicine.value.quantity);
      medData.append('pharmPrice', this.formAddMedicine.value.pharmPrice);
      medData.append('storePrice', this.formAddMedicine.value.storePrice);
      medData.append('discount', this.formAddMedicine.value.discount);
      medData.append('firmPrice', this.formAddMedicine.value.firmPrice);
      medData.append('brand', this.formAddMedicine.value.brand);
      medData.append('isAvailable', this.formAddMedicine.value.isAvailable);
      medData.append('size', this.formAddMedicine.value.size);
      medData.append('categories', this.formAddMedicine.value.categories);
      medData.append('limit', this.formAddMedicine.value.limit);
      medData.append('image',this.formAddMedicine.value.image,this.formAddMedicine.value.title
      );

    this.addMedicineService.update(this._id,medData).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.message)
        
      },
      (error) => { 
        console.log(error)
      }
    );

  }}

  onImagePicked(event: any) {
    
    const file = event.target.files[0];
    
    this.formAddMedicine.patchValue({ image: file });
    // this.formAddMedicine.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      
    };
    reader.readAsDataURL(file);
  }

  ngOnInit() {
    this.formAddMedicine = this._formBuilder.group({
      name: ['', [Validators.required ,Validators.minLength(3)]],
      description: [''],
      companyProvider: ['', [Validators.required ,Validators.minLength(3)]],
      type: ['', [Validators.required]],
      concentration: ['', [Validators.required]],
      expDate: ['', [Validators.required]],
      arriveDate: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      pharmPrice: ['', [Validators.required]],
      storePrice: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      firmPrice: ['', [Validators.required]],
      brand: ['', [Validators.required,Validators.minLength(3)]],
      isAvailable: ['', [Validators.required]],
      size: ['', [Validators.required]],
      categories: ['', [Validators.required,Validators.minLength(3)]],
      limit: ['', [Validators.required]],
      image :['']
      
    });
    
    this._ativatedRoute.paramMap.subscribe(params=>{
      this.addMedicineService.getDetails(params.get('id')).subscribe(
        (response:any)=>{
               this.medicines=response;    
                  this.receviedImg = `http://localhost:3000/${response.image}`
                  this._id = response._id
                   this.ID = response.id
                    console.log(this.medicines)    
      });
 
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
    { value: true, viewValue: 'true' },
    { value: false, viewValue: 'false' },

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

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  categories: Categorie[] = [{name: 'Antibiotics'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.categories.push({name: value});
    }
    event.chipInput!.clear();
  }

  remove(categorie: Categorie): void {
    const index = this.categories.indexOf(categorie);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  clearInput()
   { this.formAddMedicine.reset() }


}