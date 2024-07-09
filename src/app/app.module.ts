import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ctrlTravelArticlesComponent } from './ctrl-Travel-articles/ctrl-Travel-articles.component';
import { ctrlTravelAboutComponent } from './crtl-Travel-about/ctrl-Travel-about.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ctrlTravelArticlesComponent,
    ctrlTravelAboutComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
