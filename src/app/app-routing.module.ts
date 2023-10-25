import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ToursComponent } from './tours/tours.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';

const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'tours', component: ToursComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'eventos', component: EventosComponent},
  { path:'cotizaciones', component: CotizacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
