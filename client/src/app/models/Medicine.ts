import { Data } from "@angular/router";

export class Medicine{
    ID:number=0;
    name:string="";
    description:string="";
    quantity:number=0;
    pharmPrice:number=0;
    storePrice:number=0;
    expDate:string= "";
    companyProvider:string="";
    image:string="";
    isAvailable:boolean=false;
    type:string="";
    size:string="";
    concentration:string="";
    arriveDate:string="";
    categories:string[] = [""];
    discount:number=0;
    firmPrice:number=0;
    brand:string="";
    limit:number=0;

}