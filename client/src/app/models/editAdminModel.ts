export class EditAdmin{
    _id:any;
    name:string = "";
    phoneNumber:string = ""; 
    email:string = "";
    username:string = "";
    password:string = "";

    public constructor(init?: Partial<EditAdmin>) {
        Object.assign(this, init);
    }
} 
