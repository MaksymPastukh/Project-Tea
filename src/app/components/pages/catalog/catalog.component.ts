import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit,OnDestroy {

  products: ProductType[] = []
  private subscription: Subscription | null = null

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   this.subscription = this.productService.getProducts()
      .subscribe({
        next: (productItem) => {
          this.products = productItem
        },
        error: (error) => {
          console.log(error)
          this.router.navigate(['/'])
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
