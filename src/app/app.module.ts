import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import localeRu from '@angular/common/locales/ru'
import {registerLocaleData} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {LayoutComponent} from "./views/layout.component";
import {SharedModule} from "./shared/shared.module";

registerLocaleData(localeRu)

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
