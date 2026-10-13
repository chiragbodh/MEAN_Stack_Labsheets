import { Component } from '@angular/core';

@Component({ selector: 'app-product-list', standalone: false, template: `<h2>Products</h2><ul><li *ngFor="let product of products">{{ product.name }} — ₹{{ product.price }}</li></ul>` })
export class ProductListComponent {
products = [{name:'Notebook',price:80},{name:'Pen',price:20},{name:'Folder',price:50}];
}
