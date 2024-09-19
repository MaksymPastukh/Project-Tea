import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogsRoutingModule} from './catalogs-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductItemsComponent} from "./product-items/product-items.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CatalogComponent,
    ProductItemsComponent,
  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CatalogsRoutingModule,
  ]
})
export class CatalogsModule {
}
