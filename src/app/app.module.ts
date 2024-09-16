import {LOCALE_ID, NgModule} from '@angular/core';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StringLimitPipe } from './pipes/string-limit.pipe';
import localeRu from '@angular/common/locales/ru'
import {registerLocaleData} from "@angular/common";
import { FaqComponent } from './components/component/faq/faq.component';

registerLocaleData(localeRu)

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
    StringLimitPipe,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
