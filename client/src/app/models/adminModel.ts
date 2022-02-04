export class AdminUser{
    _id:any;
    username:string = "";
    password:string = "";
    public constructor(init?: Partial<AdminUser>) {
        Object.assign(this, init);
    }
} 
