import { Product } from "../product/product.class";
import { Request } from "../request/request.class";

export class RequestLine{
    id: number = 0;
    requestId: number = 0;
    request!: Request;
    productId: number =0;
    product!: Product;
    quantity: number = 1;
}