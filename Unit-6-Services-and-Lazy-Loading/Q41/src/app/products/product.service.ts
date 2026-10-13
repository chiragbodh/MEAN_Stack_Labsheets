import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Product { id:number; title:string; price:number; }
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> { return this.http.get<Product[]>('https://fakestoreapi.com/products'); }
}
