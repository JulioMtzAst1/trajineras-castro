import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { validateVerticalPosition } from '@angular/cdk/overlay';

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
export class CotizacionesComponent implements OnInit {

  paquetes:string[] = ['Paquete 1', 'Paquete 2', 'Paquete 3', 'Paquete 4'];
  formularioDatos: FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cargarFormulario();
  }


  cargarFormulario() {
    this.formularioDatos = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null),
      noVisitantes: new FormControl(null, Validators.min(1))
    })
  }
}
