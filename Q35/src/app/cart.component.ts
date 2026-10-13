import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({ selector: 'app-cart', standalone: false, template: `<section class="card"><h2>Cart Component</h2><p aria-live="polite">Items in cart: {{ cart.count$ | async }}</p><button (click)="cart.clear()">Clear cart</button></section>` })
export class CartComponent {
constructor(public cart: CartService) {}
}
