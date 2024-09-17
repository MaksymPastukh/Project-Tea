import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public products: ProductType[] = []
  private subscription: Subscription | null = null
  public loader: boolean = false

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.loader = true
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loader = false
        })
      )
      .subscribe({
        next: (productItem:ProductType[]) => {
          this.products = productItem
        },
        error: () => {
          this.router.navigate(['/'])
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
