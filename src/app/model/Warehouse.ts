import { Product } from "./Product";
import { Wtransaction } from "./WaretouseTransactions";


export class Warehouse {
  warehouseId: number;
  location: string;
  status: string;
  wtransactions: Wtransaction[];
  otransactions:any;
  product: Product;

  constructor(
    warehouseId: number = 0,
    location: string = '',
    status: string = '',
    wtransactions: Wtransaction[] = [],
    otransactions: [] = [],
    product: Product 
  ) {
    this.warehouseId = warehouseId;
    this.location = location;
    this.status = status;
    this.wtransactions = wtransactions;
    this.otransactions = otransactions;
    this.product = product;
  }
}
