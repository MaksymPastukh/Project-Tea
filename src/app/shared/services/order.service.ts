import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormType} from "../../../types/form.type";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  createOrderServices(data: FormType): Observable<OrderType> {
    return this.http.post<OrderType>(`https://testologia.ru/order-tea`, data)
  }
}
