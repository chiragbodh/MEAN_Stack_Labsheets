import { Component } from '@angular/core';
import { User, UserService } from './user.service';
import { finalize } from 'rxjs';
@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q37 — Save Data with API';
name = 'Chirag Bodh'; email = 'chirag@example.com'; saving = false; error = ''; response: User | null = null;
constructor(private service: UserService) {}
save(): void {
 this.saving = true; this.error = ''; this.response = null;
 this.service.create({name:this.name.trim(), email:this.email.trim()}).pipe(finalize(() => this.saving = false)).subscribe({
   next: response => this.response = response,
   error: () => this.error = 'Save failed. Check your connection and retry.'
 });
}
}
