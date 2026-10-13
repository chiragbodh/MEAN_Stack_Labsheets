import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
import { PageNotFoundComponent } from './page-not-found.component';
const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},{path:'products',component:ProductsComponent},{path:'products/:id',component:ProductDetailComponent},{path:'dashboard',component:DashboardComponent,children:[{path:'',redirectTo:'profile',pathMatch:'full'},{path:'profile',component:ProfileComponent},{path:'settings',component:SettingsComponent}]},{path:'**',component:PageNotFoundComponent}];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
