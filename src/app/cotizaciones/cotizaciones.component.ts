import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { PrimerStepComponent } from './primer-step/primer-step.component';
import { SecondStepComponent } from './second-step/second-step.component';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CotizacionesComponent implements OnInit{

  @ViewChild(PrimerStepComponent) primerStep: PrimerStepComponent;
  @ViewChild(SecondStepComponent) segundoStep: SecondStepComponent; 
  paquetes:string[] = ['Paquete 1', 'Paquete 2', 'Paquete 3', 'Paquete 4'];
  formCotizacion: FormGroup;
  costoPaseo: number = 0;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formCotizacion = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null),
      noVisitantes: new FormControl(null, [Validators.min(1), Validators.required]),
      paquete: new FormControl(null, Validators.min(1))
    });
  }

  eventosStepCotizacion(ev: { evento, datos }) {
    if(ev?.evento == 'mandarDatosCotizacion') {
      this.formCotizacion.get('nombre').patchValue(ev?.datos.get('nombre').value)
      this.formCotizacion.get('apellido').patchValue(ev?.datos.get('apellido').value)
      this.formCotizacion.get('email').patchValue(ev?.datos.get('email').value)
      this.formCotizacion.get('telefono').patchValue(ev?.datos.get('telefono').value)
      this.formCotizacion.get('noVisitantes').patchValue(ev?.datos.get('noVisitantes').value)
    }
    if(ev?.evento == 'mandarPaqueteCotizacion') {
      this.formCotizacion.get('paquete').patchValue(ev?.datos.get('paquete').value)
      this.cotizarPaseo();
    }
  }

  cotizarPaseo() {
    let costoPaquete = 0;
    let trajineraGrande = 22;
    let noTrajineras = 0;
    let paquete = this.formCotizacion.get('paquete').value;
    let visitantes = this.formCotizacion.get('noVisitantes').value;

    noTrajineras = Math.ceil(visitantes / trajineraGrande); 

    if(paquete == 1){
      costoPaquete = 600;
    }

    this.costoPaseo = costoPaquete * noTrajineras;
  }

  resetFormulario() {
    this.formCotizacion.get('nombre').patchValue(null);
    this.formCotizacion.get('apellido').patchValue(null);
    this.formCotizacion.get('email').patchValue(null);
    this.formCotizacion.get('telefono').patchValue(null);
    this.formCotizacion.get('noVisitantes').patchValue(null);
    this.formCotizacion.get('paquete').patchValue(null);
    this.primerStep.resetForm();
    this.segundoStep.resetForm();
    console.log('funciona')
  }

}
