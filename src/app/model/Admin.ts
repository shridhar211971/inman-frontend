export class Admin{
  adminId:number;
  email:string;
  username:string;
  password:string;

  constructor(
    adminId:number=0,
    email:string="",
    username:string="",
    password:string=""

  ){
    this.adminId=adminId;
    this.email=email;
    this.username=username;
    this.password=password;

  }

}
