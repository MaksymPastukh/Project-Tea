import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from "./component/faq/faq.component";
import {ProductItemComponent} from "./component/product-item/product-item.component";
import {StringLimitPipe} from "./pipes/string-limit.pipe";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    FaqComponent,
    ProductItemComponent,
    StringLimitPipe,

  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  exports: [
    StringLimitPipe,
    ProductItemComponent,
    FaqComponent
  ]
})
export class SharedModule {
}
