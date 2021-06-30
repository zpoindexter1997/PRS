import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

const baseurl: string = "http://localhost:1337/api/Products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private http : HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${baseurl}/detailed`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${baseurl}/${id}/detailed`) as Observable<Product>;
  }
  create(product: Product): Observable<Product> {
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }
  update(product: Product): Observable<any>{
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }
  delete(id: number): Observable<Product>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Product>;
  }
}