import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({ selector: 'app-product', standalone: false, template: `<section class="card"><h2>Product Component</h2><p>Notebook — ₹80</p><button (click)="cart.addItem()">Add notebook</button></section>` })
export class ProductComponent {
constructor(public cart: CartService) {}
}
