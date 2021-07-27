export class PurchaseOrder{
    productName: string = "";
    productNbr: number = 0;
    quantity: number = 0;
    price: number = 0;


    constructor(price: number, productName: string, productNbr: number, quantity: number){
        this.productName = productName;
        this.productNbr = productNbr;
        this.quantity = quantity;
        this.price = price;
    }
}