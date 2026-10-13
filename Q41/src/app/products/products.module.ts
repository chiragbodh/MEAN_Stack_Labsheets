import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductsRoutingModule } from './products-routing.module';
@NgModule({declarations:[ProductListComponent],imports:[CommonModule,HttpClientModule,ProductsRoutingModule],providers:[ProductService]})
export class ProductsModule {}
