import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestorTareasComponent } from './gestor-tareas/gestor-tareas.component';
import { GlucontrolComponent } from './glucontrol/glucontrol.component';
import { GestorCitasComponent } from './gestor-citas/gestor-citas.component';
import { IntroASPComponent } from './intro-asp/intro-asp.component';
import { GestorInventarioComponent } from './gestor-inventario/gestor-inventario.component';

@NgModule({
  declarations: [GestorTareasComponent, GlucontrolComponent, GestorCitasComponent, IntroASPComponent, GestorInventarioComponent],
  imports: [CommonModule],
})
export class ProyectosModule {}
