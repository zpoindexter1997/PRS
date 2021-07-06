import { Product } from "../product/product.class";
import { User } from "../user/user.class";
import { Vendor } from "../vendor/vendor.class";

export class PurchaseOrder{
    user: User | null = null;
    vendor: Vendor | null = null;
    product: Product | null = null;
    quantity: number = 0;
    price: number = 0;
    dateCreated: number = Date.now();

    constructor(user: User, vendor: Vendor, product: Product, quantity: number){
        this.user = user;
        this.vendor = vendor;
        this.product = product;
        this.quantity = quantity;
        this.price = product.price * quantity;
    }
}