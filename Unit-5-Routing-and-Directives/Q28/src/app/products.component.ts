import { Component } from '@angular/core';

@Component({ selector: 'app-products', standalone: false, template: `<h2>Products</h2><ul><li *ngFor="let product of products"><a [routerLink]="['/products',product.id]">{{ product.name }}</a></li></ul>` })
export class ProductsComponent {
products = [{id:1,name:'Notebook',price:80},{id:2,name:'Pen',price:20},{id:3,name:'Folder',price:50}];
}
