import { Component } from '@angular/core';
import { User, UserService } from './user.service';
import { finalize } from 'rxjs';
@Component({ selector: 'app-root', standalone: false, templateUrl: './app.component.html' })
export class AppComponent {
  title = 'Q38 — Update and Delete with API';
users: User[] = []; selected: User | null = null; busy = true; error = ''; message = '';
constructor(private service: UserService) {
 service.getUsers().pipe(finalize(() => this.busy = false)).subscribe({next: users => this.users = users,error: () => this.error = 'Loading failed.'});
}
edit(user: User): void { this.selected = {...user}; this.message = ''; }
update(): void {
 if (!this.selected) return;
 const record = {...this.selected}; this.busy = true; this.error = ''; this.message = '';
 this.service.update(record).pipe(finalize(() => this.busy = false)).subscribe({
  next: updated => { this.users = this.users.map(user => user.id === updated.id ? updated : user); this.selected = null; this.message = 'User updated in the current page.'; },
  error: () => this.error = 'Update failed; the displayed record was not changed.'
 });
}
remove(id: number): void {
 this.busy = true; this.error = ''; this.message = '';
 this.service.remove(id).pipe(finalize(() => this.busy = false)).subscribe({
  next: () => { this.users = this.users.filter(user => user.id !== id); if (this.selected?.id === id) this.selected = null; this.message = 'User removed from the current page.'; },
  error: () => this.error = 'Delete failed; the displayed list was not changed.'
 });
}
}
