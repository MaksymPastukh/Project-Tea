import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {OrderType} from "../../../types/order.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription! : Subscription | null
  private subscriptionOrder! : Subscription | null

  constructor(private activeRoute: ActivatedRoute, private route: Router, private fb: FormBuilder, private orderServices: OrderService) {
  }

  reactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+\\d{11}$')]],
    country: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z0-9 \\-\\/]+$')]],
    zip: ['', [Validators.required, Validators.pattern('^\\d{5}$')]],
    product: ['', Validators.required],
    address: ['', Validators.required],
    comment: [''],
  })

  ngOnInit(): void {
    this.subscription = this.activeRoute.queryParams.subscribe({
      next: (param: Params) => {
        if (param['product']) {
          this.reactForm.patchValue({product: param['product']})
        }
      }, error: () => {
        this.route.navigate(['/'])
      }
    })
  }

  createOrder() {
    if (!this.reactForm.get('name')?.value) {
      alert('Введите имя!');
      return;
    }
    if (!this.reactForm.get('last_name')?.value) {
      alert('Введите фамилию!');
      return;
    }
    if (!this.reactForm.get('phone')?.value) {
      alert('Введите номер телефона!');
      return;
    }
    if (!this.reactForm.get('country')?.value) {
      alert('Введите страну!');
      return;
    }
    if (!this.reactForm.get('zip')?.value) {
      alert('Введите почтовый индекс!');
      return;
    }
    if (!this.reactForm.get('address')?.value) {
      alert('Введите адрес!');
      return;
    }

    if (!this.reactForm.valid) {
      alert('Некоторые поля формы заполнены неправильно!');
      return;
    }

    this.subscriptionOrder = this.orderServices.createOrderServices(this.reactForm.value)
      .subscribe({
        next: (response: OrderType) => {
          if (response.success && !response.message) {
            alert('Спасибо за заказ')
            setTimeout(() => {
              this.route.navigate(['/'])
              this.reactForm.reset()
            }, 2000)
          }
        },
        error: () => {
          this.route.navigate(['/'])
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
    this.subscriptionOrder?.unsubscribe()
  }
}
