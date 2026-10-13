import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({providedIn:'root'})
export class CartService {
  private readonly count = new BehaviorSubject<number>(0);
  readonly count$ = this.count.asObservable();
  addItem(): void { this.count.next(this.count.value + 1); }
  clear(): void { this.count.next(0); }
}
