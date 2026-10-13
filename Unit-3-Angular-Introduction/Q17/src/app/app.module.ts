import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SharedModule } from './shared/shared.module';
@NgModule({ declarations: [AppComponent, HeaderComponent], imports: [BrowserModule, FormsModule, SharedModule], bootstrap: [AppComponent] })
export class AppModule {}
