import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { UsersComponent } from './users.component';
import { OrdersComponent } from './orders.component';
import { ReportsComponent } from './reports.component';
const routes: Routes = [{path:'',redirectTo:'admin',pathMatch:'full'},{path:'admin',component:AdminLayoutComponent,children:[{path:'',redirectTo:'users',pathMatch:'full'},{path:'users',component:UsersComponent},{path:'orders',component:OrdersComponent},{path:'reports',component:ReportsComponent}]}];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
