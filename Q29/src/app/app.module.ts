import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({ declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, PageNotFoundComponent], imports: [BrowserModule, FormsModule, AppRoutingModule], bootstrap: [AppComponent] })
export class AppModule {}
