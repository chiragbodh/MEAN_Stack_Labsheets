import { Component } from '@angular/core';
import { User, UserService } from './user.service';
import { finalize } from 'rxjs';
@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q39 — Loading and Error Handling';
users: User[] = []; loading = false; error = '';
constructor(private service: UserService) { this.load(); }
load(fail = false): void {
 this.loading = true; this.error = ''; this.users = [];
 this.service.getUsers(fail).pipe(finalize(() => this.loading = false)).subscribe({
   next: users => this.users = users,
   error: () => this.error = 'Could not load users. Check the URL and your internet connection.'
 });
}
}
