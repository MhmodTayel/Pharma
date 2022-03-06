import { MedicineService } from './../../services/medicineService/medicine.service';
import { Medicine } from './../../models/Medicine';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';

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
  selector: 'app-add-med',
  templateUrl: './add-med.component.html',
  styleUrls: ['./add-med.component.scss']
})

export class AddMedComponent implements OnInit {
  medicines: Medicine[] = [];
  date = new FormControl(new Date());
  constructor(private _formBuilder: FormBuilder, private _router: Router ,private addMedicineService:MedicineService,private _mysnackbar: SnackBarService) { }
  formAddMedicine: FormGroup = new FormGroup({});
  serializedDate = new FormControl(new Date().toISOString());
  imagePreview: string = '';
  
  onSubmit() {
    if (this.formAddMedicine.valid) {
      const postData = new FormData();

      postData.append('name', this.formAddMedicine.value.name);
      postData.append('description', this.formAddMedicine.value.description);
      postData.append('companyProvider', this.formAddMedicine.value.companyProvider);
      postData.append('type', this.formAddMedicine.value.type);
      postData.append('concentration', this.formAddMedicine.value.concentration);
      postData.append('expDate', this.formAddMedicine.value.expDate);
      postData.append('arriveDate', this.formAddMedicine.value.arriveDate);
      postData.append('quantity', this.formAddMedicine.value.quantity);
      postData.append('pharmPrice', this.formAddMedicine.value.pharmPrice);
      postData.append('storePrice', this.formAddMedicine.value.storePrice);
      postData.append('discount', this.formAddMedicine.value.discount);
      postData.append('firmPrice', this.formAddMedicine.value.firmPrice);
      postData.append('brand', this.formAddMedicine.value.brand);
      postData.append('size', this.formAddMedicine.value.size);

      postData.append('categories', this.formAddMedicine.value.categories);
      postData.append('limit', this.formAddMedicine.value.limit);
      if(this.formAddMedicine.value.image){
      postData.append('image',this.formAddMedicine.value.image,this.formAddMedicine.value.title);
      }

    
    this.addMedicineService.addMedicine(postData).subscribe(
      (response: any) => {
        this._mysnackbar.openSnackBar(`${response.name} has been added to store`,'blue-snackbar', 'Success') 
      },
      (error) => { 
        
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
      size: ['', [Validators.required]],
      limit: ['', [Validators.required]],
      image :[''],
      categories: this._formBuilder.array([this._formBuilder.control('', [Validators.required,Validators.minLength(3)])])
     
      
    });
  }
  // addSong() {
  //   this.categories.push(this._formBuilder.control(''));
  // }
  
  get categories() {
      return this.formAddMedicine.get("categories") as FormArray;
  }
//   removeSong(index: number) {
//     this.categories.removeAt(index);
// }

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

  
  clearInput()
   { this.formAddMedicine.reset() }


}
