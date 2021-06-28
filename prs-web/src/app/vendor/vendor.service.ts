import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const baseurl: string = "http://localhost:1337/api/Vendors"

@Injectable({
  providedIn: 'root'
})
export class VendorService {


  constructor(
    private http : HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }
  update(vendor: Vendor): Observable<any>{
    return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }
  delete(id: number): Observable<Vendor>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Vendor>;
  }
}
