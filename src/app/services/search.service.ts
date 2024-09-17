import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea?queru=search`)
  }
}
