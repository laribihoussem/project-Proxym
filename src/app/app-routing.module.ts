import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {ProfileComponent} from './components/profile/profile.component'
import {LoginComponent} from './components/login/login.component'
import {RegisterComponent} from './components/register/register.component'
import { PublicationsComponent } from './components/publications/publications.component'

const appRoutes: Routes =[
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'profile', component: ProfileComponent  },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'publications', component: PublicationsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
