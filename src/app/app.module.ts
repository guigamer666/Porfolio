import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GestorTareasComponent } from './proyectos/gestor-tareas/gestor-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeMiComponent,
    GestorTareasComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
