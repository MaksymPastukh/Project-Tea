import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductItemsComponent} from "./product-items/product-items.component";
import {ProductItemComponent} from "../../shared/component/product-item/product-item.component";

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: '', component: ProductItemsComponent},
  {path: ':id', component: ProductItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule {
}
