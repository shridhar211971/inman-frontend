export class Customer{
  customerId:number;
  name:string;
  email:string;
  contactNumber:number;
  address:string;
  userName:string;
  password:string;
  

  constructor(
    customerId:number=0,
    name:string="",
    email:string="",
    contactNumber:number=0,
    address:string="",
    userName:string="",
    password:string=""
  ){
    this.customerId=customerId;
    this.name=name;
    this.email=email;
    this.contactNumber=contactNumber;
    this.address=address;
    this.userName=userName;
    this.password=password;

}

}
