import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
@NgModule({ declarations: [AppComponent, ProfileComponent], imports: [BrowserModule, FormsModule], bootstrap: [AppComponent] })
export class AppModule {}
