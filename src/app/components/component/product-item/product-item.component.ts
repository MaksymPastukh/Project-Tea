import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'product',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  product: ProductType

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
    this.activeRoute.params.subscribe((value) => {
      if (value['id']) {
        this.productService.getProduct(+value['id'])
          .subscribe({
            next: product => {
              this.product = product
            },
            error: () => {
              console.log('no')
            }
          })
      }
    })
  }

  ngOnDestroy() {
  }

}
