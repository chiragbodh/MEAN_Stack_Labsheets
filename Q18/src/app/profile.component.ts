import { Component } from '@angular/core';
@Component({
  selector: 'app-profile', standalone: false,
  template: `<section class="profile-card"><img src="profile.svg" alt="Replace this sample avatar with your own photo"><h2>{{ name }}</h2><p>{{ course }}</p></section>`,
  styles: [`.profile-card { padding:24px; border:1px solid #a8bed8; border-radius:14px; text-align:center; max-width:380px; background:#edf4ff; } img {width:120px;height:120px;border-radius:50%;} h2 {color:#245789;}`]
})
export class ProfileComponent { name = 'Chirag Bodh'; course = 'MCA'; }
