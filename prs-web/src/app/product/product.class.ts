import { Vendor } from "../vendor/vendor.class";

export class Product{
    id: number = 0;
    partNbr: number = 0;
    name: string = "";
    price: number = 0;
    unit: string = "each";
    photoPath: string = "";
    vendorId: number = 0;
    vendor: Vendor | null = null;
}