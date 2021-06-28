import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/app/request/request.class'

const baseurl: string = "http://localhost:1337/api/Requests"


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }
  create(product: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, product) as Observable<Request>;
  }
  update(product: Request): Observable<any>{
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }
  delete(id: number): Observable<Request>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
  }
}