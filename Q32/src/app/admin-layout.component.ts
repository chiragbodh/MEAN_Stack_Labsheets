import { Component } from '@angular/core';

@Component({ selector: 'app-admin-layout', standalone: false, template: `<div class="layout"><aside><h2>Admin</h2><nav><a routerLink="users" routerLinkActive="active">Users</a><a routerLink="orders" routerLinkActive="active">Orders</a><a routerLink="reports" routerLinkActive="active">Reports</a></nav></aside><section><router-outlet></router-outlet></section></div>` })
export class AdminLayoutComponent {

}
