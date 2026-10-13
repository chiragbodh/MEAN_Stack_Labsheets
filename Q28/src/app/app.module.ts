import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({ declarations: [AppComponent, ProductsComponent, ProductDetailComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], bootstrap: [AppComponent] })
export class AppModule {}
