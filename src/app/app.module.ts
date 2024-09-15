import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { OrderComponent } from './components/pages/order/order.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { ProductItemsComponent } from './components/component/product-items/product-items.component';
import { ProductItemComponent } from './components/component/product-item/product-item.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    OrderComponent,
    FooterComponent,
    CatalogComponent,
    ProductItemsComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
