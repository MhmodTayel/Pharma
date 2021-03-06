import { MedicineService } from './../../services/medicineService/medicine.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormArray } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import {Medicine} from "../../models/Medicine";
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
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.scss']
})
export class EditMedComponent implements OnInit {
   Id:any=''

  date = new FormControl(new Date());
  medicines : Medicine = new Medicine();
  constructor(
    private _formBuilder: FormBuilder, 
    private _router: Router ,
    private addMedicineService:MedicineService,
    private _ativatedRoute:ActivatedRoute,private _mysnackbar: SnackBarService) { }

  formEditMed: FormGroup = new FormGroup({});
  serializedDate = new FormControl(new Date().toISOString());
  imagePreview: string = '';
  receviedImg:string='';
  ID:number=0;
  
  check:any=true;

  toggelCheck(val:boolean){
   this.check=val;

  }
  
  onSubmit() {
    if (this.formEditMed.valid) {
      const medData = new FormData();

      medData.append('name', this.formEditMed.value.name);
      medData.append('id', this.Id);
      medData.append('description', this.formEditMed.value.description);
      medData.append('companyProvider', this.formEditMed.value.companyProvider);
      medData.append('type', this.formEditMed.value.type);
      medData.append('concentration', this.formEditMed.value.concentration);
      medData.append('expDate', this.formEditMed.value.expDate);
      medData.append('arriveDate', this.formEditMed.value.arriveDate);
      medData.append('quantity', this.formEditMed.value.quantity);
      medData.append('pharmPrice', this.formEditMed.value.pharmPrice);
      medData.append('storePrice', this.formEditMed.value.storePrice);
      medData.append('discount', this.formEditMed.value.discount);
      medData.append('firmPrice', this.formEditMed.value.firmPrice);
      medData.append('brand', this.formEditMed.value.brand);
      medData.append('size', this.formEditMed.value.size);
      medData.append('categories', this.formEditMed.value.categories);
      medData.append('limit', this.formEditMed.value.limit);
      if(this.formEditMed.value.image){
      // medData.append('image',this.formEditMed.value.image,this.formEditMed.value.title
      // );
      }

    this.addMedicineService.update(this.Id,medData).subscribe(
      (response: any) => {
        
        this._mysnackbar.openSnackBar(`${response.name} has been updated`,'blue-snackbar', 'Success') 

        
      },
      (error) => { 
       
      }
    );

  }}

  onImagePicked(event: any) {
    
    const file = event.target.files[0];
    
    this.formEditMed.patchValue({ image: file });
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      
    };
    reader.readAsDataURL(file);
  }

  ngOnInit() {
    this.formEditMed = this._formBuilder.group({
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
      size: ['',[Validators.required]],
      limit: ['', [Validators.required]],
      image :[''],
      categories: this._formBuilder.array([this._formBuilder.control('', [Validators.required,Validators.minLength(3)])])
     
      
    });
    
    this._ativatedRoute.paramMap.subscribe(params=>{
      this.Id=params.get('id')
      this.addMedicineService.getDetails(params.get('id')).subscribe(
        (response:any)=>{
          this.medicines =response
          this.formEditMed.patchValue(response)    
                  
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

  get categories() {
    return this.formEditMed.get("categories") as FormArray;
}
  

  clearInput()
   { this.formEditMed.reset() }
  


  }









