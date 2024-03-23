import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { GestorTareasComponent } from './proyectos/gestor-tareas/gestor-tareas.component';
import { GlucontrolComponent } from './proyectos/glucontrol/glucontrol.component';
import { GestorCitasComponent } from './proyectos/gestor-citas/gestor-citas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'acercaDeMi', component: AcercaDeMiComponent },
  { path: 'proyectos', component: GestorTareasComponent },
  { path: 'glucontrol', component: GlucontrolComponent },
  { path: 'gestorCitas', component: GestorCitasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
