import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order.service";
import {OrderType} from "../../../types/order.type";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription!: Subscription | null
  private subscriptionOrder!: Subscription | null
  public condition = false

  constructor(private el: ElementRef, private activeRoute: ActivatedRoute, private route: Router, private fb: FormBuilder, private orderServices: OrderService) {
  }

  reactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
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
    this.condition = true
    const elementFromHide = this.el.nativeElement.querySelector('.form-order')
    const elementFromShow = this.el.nativeElement.querySelector('.form-order-success')
    const submitError = this.el.nativeElement.querySelector('.submit-error')

    this.subscriptionOrder = this.orderServices.createOrderServices(this.reactForm.value)
      .pipe(
        tap(() => {
          this.condition = false
        })
      )
      .subscribe({
        next: (response: OrderType) => {
          if (response.success && !response.message) {
            elementFromHide.style.display = 'none'
            elementFromShow.style.display = 'block'
            setTimeout(() => {
              this.route.navigate(['/'])
              this.reactForm.reset()
            }, 3000)
          }
        },
        error: () => {
          submitError.style.display = 'block'
          setTimeout(() => {
            submitError.style.display = 'none'
          }, 3000)
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
    this.subscriptionOrder?.unsubscribe()
  }
}
