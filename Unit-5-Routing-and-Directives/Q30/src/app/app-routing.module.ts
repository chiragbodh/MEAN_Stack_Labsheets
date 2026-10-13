import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings.component';
const routes: Routes = [{path:'',redirectTo:'dashboard',pathMatch:'full'},{path:'dashboard',component:DashboardComponent,children:[{path:'',redirectTo:'profile',pathMatch:'full'},{path:'profile',component:ProfileComponent},{path:'settings',component:SettingsComponent}]}];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
