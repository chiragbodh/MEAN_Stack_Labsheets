import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({ declarations: [AppComponent, HomeComponent, AboutComponent, ProductsComponent, ProductDetailComponent, DashboardComponent, ProfileComponent, SettingsComponent, PageNotFoundComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], bootstrap: [AppComponent] })
export class AppModule {}
