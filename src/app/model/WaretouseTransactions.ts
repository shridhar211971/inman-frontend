import { Warehouse } from "./Warehouse";

export class Wtransaction {
  transactionId: number;
  creationDate: string;
  creationTime: string;
  modifiedBy: string;
  modifiedIn: string;
  transactionType: string;
  chanageInSku: string;
  warehouse: Warehouse;

  constructor(
    transactionId: number = 0,
    creationDate: string = '',
    creationTime: string = '',
    modifiedBy: string = '',
    modifiedIn: string = '',
    transactionType: string = '',
    chanageInSku: string = '',
    warehouse: Warehouse 
  ) {
    this.transactionId = transactionId;
    this.creationDate = creationDate;
    this.creationTime = creationTime;
    this.modifiedBy = modifiedBy;
    this.modifiedIn = modifiedIn;
    this.transactionType = transactionType;
    this.chanageInSku = chanageInSku;
    this.warehouse = warehouse;
  }
}
