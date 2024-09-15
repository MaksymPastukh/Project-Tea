import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() product: ProductType

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: '',
      description: ''
    }

  }

  ngOnInit(): void {
  }

}
