import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  public searchArr: ProductType[] = []
  public filterProductSearch: ProductType[] = []
  public search: boolean = false
  private subscription: Subscription | null = null


  constructor(private searchService: SearchService, private element: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.subscription = this.searchService.getSearch()
      .subscribe((products: ProductType[]) => {
        this.searchArr = products
        this.filterProductSearch = products
      })

    this.render.listen('document', 'click', (event: Event) => {
      if (!this.element.nativeElement.contains(event.target)) {
        this.clearInputSearch()
      }
    })
  }

  filterResult(str: string) {
    this.search = true
    if (!str) {
      this.searchArr = []
      return
    }
    this.searchArr = this.filterProductSearch.filter(
      product => product?.title.toLowerCase().includes(str.toLowerCase())
    )
  }

  clearInputSearch(product?: ProductType) {
    const inputSearch = this.element.nativeElement.querySelector('.search-input')
    inputSearch.value = ''
    this.searchArr = []
    this.search = false
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
