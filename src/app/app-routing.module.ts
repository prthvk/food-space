import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { FavouritesComponent } from './page/favourites/favourites.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SearchItemsComponent } from './search/search-items/search-items.component';
import { GuardGuard } from './guard.guard'



const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "search-items",
    component: SearchItemsComponent
  },
  {
    path:"favourites",
    component:FavouritesComponent,
    canActivate:[GuardGuard]
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: 'full'
  },
  {
    path: "**",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
