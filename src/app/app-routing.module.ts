import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'acercaDeMi', component: AcercaDeMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
