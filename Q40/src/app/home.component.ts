import { Component } from '@angular/core';

@Component({ selector: 'app-home', standalone: false, template: `<h2>Lazy loading demonstration</h2><p>Open Network before clicking Admin or Customer. Each feature loads on first navigation.</p>` })
export class HomeComponent {

}
