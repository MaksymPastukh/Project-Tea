import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductItemComponent} from "./components/component/product-item/product-item.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: CatalogComponent},
  {path: 'product/:id', component: ProductItemComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
