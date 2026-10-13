import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
console.log('Q31: Angular application starting for Chirag Bodh');
platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error));
