import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ModuleWithProviders} from '@angular/core';

//componentes
import {HomeComponent} from './shared/home/home.component';
import {ServiciosComponent} from './shared/servicios/servicios.component';
import {BlogComponent} from './shared/blog/blog.component';
import {ContactoComponent} from './shared/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
