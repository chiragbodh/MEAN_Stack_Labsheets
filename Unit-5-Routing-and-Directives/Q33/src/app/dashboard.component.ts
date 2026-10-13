import { Component } from '@angular/core';

@Component({ selector: 'app-dashboard', standalone: false, template: `<section class="card"><h2>Dashboard</h2><nav><a routerLink="profile" routerLinkActive="active">Profile</a><a routerLink="settings" routerLinkActive="active">Settings</a></nav><router-outlet></router-outlet></section>` })
export class DashboardComponent {

}
