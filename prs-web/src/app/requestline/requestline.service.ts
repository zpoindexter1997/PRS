import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { PurchaseOrder } from '../purchaseorder/purchaseorder.class';
import { RequestLine } from './requestline.class';



const baseurl = "http://localhost:1337/api/RequestLines";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  constructor(
    private http : HttpClient
  ) { }

  list(): Observable<RequestLine[]> {
    return this.http.get(`${baseurl}`) as Observable<RequestLine[]>;
  }
  polist(id: number): Observable<PurchaseOrder[]> {
    return this.http.get(`${baseurl}/PO/${id}`) as Observable<PurchaseOrder[]>;
  }
  get(id: number): Observable<RequestLine> {
    return this.http.get(`${baseurl}/${id}/detailed`) as Observable<RequestLine>;
  }
  create(RequestLine: RequestLine): Observable<RequestLine> {
    return this.http.post(`${baseurl}`, RequestLine) as Observable<RequestLine>;
  }
  update(RequestLine: RequestLine): Observable<any>{
    return this.http.put(`${baseurl}/${RequestLine.id}`, RequestLine) as Observable<any>;
  }
  review(RequestLine: RequestLine, status: string): Observable<any>{
    return this.http.put(`${baseurl}/${RequestLine.id}/manual/${status}`, RequestLine) as Observable<any>;
  }
  delete(id: number): Observable<RequestLine>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<RequestLine>;
  }

}
