import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { AdminModule } from './admin/admin.module';
@NgModule({ declarations: [AppComponent, HomeComponent], imports: [BrowserModule, FormsModule, AppRoutingModule, AdminModule], bootstrap: [AppComponent] })
export class AppModule {}
