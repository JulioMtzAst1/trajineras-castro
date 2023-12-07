import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-primer-step',
  templateUrl: './primer-step.component.html',
  styleUrls: ['./primer-step.component.css']
})
export class PrimerStepComponent implements OnInit {

  @Output() eventosSC = new EventEmitter<{evento: string, datos: any}>();
  formularioDatos: FormGroup;
  formularioValido: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formularioDatos = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telefono: new FormControl(null),
      noVisitantes: new FormControl(null, [Validators.min(1), Validators.required])
    });

    this.formularioDatos.statusChanges.subscribe(status => {
      this.formularioValido = status === 'VALID';
    });
  }

  cotizarPaquete() {
    if(this.formularioDatos.valid){
      this.eventosSC.emit({ evento: 'mandarDatosCotizacion', datos: this.formularioDatos});
    }
  }

  resetForm() {
    this.formularioDatos.get('nombre').patchValue(null)
    this.formularioDatos.get('apellido').patchValue(null)
    this.formularioDatos.get('email').patchValue(null)
    this.formularioDatos.get('telefono').patchValue(null)
    this.formularioDatos.get('noVisitantes').patchValue(null)
  }

}
