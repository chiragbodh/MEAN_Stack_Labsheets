import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';

@NgModule({ declarations: [AppComponent, DashboardComponent, ProfileComponent, SettingsComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], bootstrap: [AppComponent] })
export class AppModule {}
