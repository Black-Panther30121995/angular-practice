import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    // {path:'profile',component:ProfileComponent,data:{name:'Peter'}},
    {path:'profile',component:ProfileComponent},
    {path:'user/:id/:name',loadComponent:()=>import('./user/user.component').then((c)=>c.UserComponent)},
    // {path:'admin',component:AdminComponent},
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then((c)=>c.AdminComponent)},
    
    {path:'**',component:PageNotFoundComponent}
];
