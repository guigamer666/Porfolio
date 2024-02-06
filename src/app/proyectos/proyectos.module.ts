import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestorTareasComponent } from './gestor-tareas/gestor-tareas.component';
import { GlucontrolComponent } from './glucontrol/glucontrol.component';

@NgModule({
  declarations: [GestorTareasComponent, GlucontrolComponent],
  imports: [CommonModule],
})
export class ProyectosModule {}
