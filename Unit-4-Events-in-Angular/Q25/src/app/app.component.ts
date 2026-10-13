import { Component } from '@angular/core';

@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q25 — Simple Calculator';
first: number | null = 10; second: number | null = 5; result: number | null = null; error = '';
calculate(operation: string): void {
 this.error = ''; this.result = null;
 if (this.first === null || this.second === null || !Number.isFinite(this.first) || !Number.isFinite(this.second)) { this.error = 'Enter two valid numbers.'; return; }
 if (operation === '/' && this.second === 0) { this.error = 'Cannot divide by zero.'; return; }
 switch(operation) { case '+': this.result = this.first + this.second; break; case '-': this.result = this.first - this.second; break; case '*': this.result = this.first * this.second; break; case '/': this.result = this.first / this.second; break; }
}
}
