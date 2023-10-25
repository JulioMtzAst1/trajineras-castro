import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ToursComponent } from './tours/tours.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosComponent } from './eventos/eventos.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ToursComponent,
    ContactoComponent,
    EventosComponent,
    CotizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
