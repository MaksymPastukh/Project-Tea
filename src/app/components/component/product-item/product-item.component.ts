import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null
  public product: ProductType
  public loader: boolean = false

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private route: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.loader = true
    this.subscription = this.activeRoute.params.subscribe((value) => {
      if (value['id']) {
        this.productService.getProduct(+value['id'])
          .pipe(
            tap(() => {
              this.loader = false
            })
          )
          .subscribe({
            next: (product: ProductType) => {
              this.product = product
            },
            error: () => {
              this.route.navigate(['/'])
            }
          })
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
