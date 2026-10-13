import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { UsersComponent } from './users.component';
import { OrdersComponent } from './orders.component';
import { ReportsComponent } from './reports.component';

@NgModule({ declarations: [AppComponent, AdminLayoutComponent, UsersComponent, OrdersComponent, ReportsComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], bootstrap: [AppComponent] })
export class AppModule {}
