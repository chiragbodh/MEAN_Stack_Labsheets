import { Component } from '@angular/core';

@Component({ selector: 'app-settings', standalone: false, template: `<h3>Settings</h3><label><input type="checkbox" [(ngModel)]="notifications">Enable practice notifications</label><p>Notifications: {{ notifications ? "On" : "Off" }}</p>` })
export class SettingsComponent {
notifications = false;
}
