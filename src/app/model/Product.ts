
export class Product{
  productId:number
  name:string;
  description:string;
  price:number;
  sku:number;
  rating:number;
  quantity:number;
  productImages:any

  constructor(
    productId:number=0,
    name:string="",
    description:string="",
    price:number=0,
    sku:number=0,
    rating:number=0,
    quantity:number=0,
    productImages:any
  ){
    this.productId=productId
    this.name=name;
    this.description=description;
    this.price=price;
    this.sku=sku;
    this.rating=rating;
    this.quantity=quantity;
    this.productImages=productImages;
  }

}
