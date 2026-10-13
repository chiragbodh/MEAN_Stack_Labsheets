import { Component } from '@angular/core';

@Component({ selector: 'app-pagenotfound', standalone: false, template: `<h2>404 — Page not found</h2><p>The requested route does not exist.</p><a routerLink="/home">Return home</a>` })
export class PageNotFoundComponent {

}
