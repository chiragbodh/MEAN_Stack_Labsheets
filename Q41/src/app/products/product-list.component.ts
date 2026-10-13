import { Component } from '@angular/core';
import { Product, ProductService } from './product.service';
import { finalize } from 'rxjs';
@Component({ selector: 'app-product-list', standalone: false, template: `<h2>Products from API</h2><p *ngIf="loading">Loading...</p><p *ngIf="error" class="error">{{ error }}</p><button (click)="load()" [disabled]="loading">Reload</button><ul><li *ngFor="let product of products">{{ product.title }} — {{ product.price | currency:"USD" }}</li></ul>` })
export class ProductListComponent {
products: Product[] = []; loading = false; error = '';
constructor(private service: ProductService) { this.load(); }
load(): void { this.loading = true; this.error = ''; this.service.getProducts().pipe(finalize(() => this.loading = false)).subscribe({next: products => this.products = products,error: () => this.error = 'API request failed. Check internet access and try again.'}); }
}
