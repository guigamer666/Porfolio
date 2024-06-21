import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectosModule } from './proyectos/proyectos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeMiComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ProyectosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
