import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart.component';
@NgModule({ declarations: [AppComponent, ProductComponent, CartComponent], imports: [BrowserModule, FormsModule], bootstrap: [AppComponent] })
export class AppModule {}
