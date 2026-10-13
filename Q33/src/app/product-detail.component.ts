import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({ selector: 'app-product-detail', standalone: false, template: `<section *ngIf="product; else missing"><h2>{{ product.name }}</h2><p>ID: {{ product.id }}</p><p>Price: ₹{{ product.price }}</p></section><ng-template #missing><h2>Product not found</h2></ng-template><a routerLink="/products">Back to products</a>` })
export class ProductDetailComponent {
products = [{id:1,name:'Notebook',price:80},{id:2,name:'Pen',price:20},{id:3,name:'Folder',price:50}];
product: {id:number;name:string;price:number} | undefined;
constructor(route: ActivatedRoute) {
 route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
   const id = Number(params.get('id'));
   this.product = this.products.find(product => product.id === id);
 });
}
}
