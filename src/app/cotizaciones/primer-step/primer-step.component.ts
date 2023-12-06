import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-primer-step',
  templateUrl: './primer-step.component.html',
  styleUrls: ['./primer-step.component.css']
})
export class PrimerStepComponent implements OnInit {

  formularioDatos: FormGroup;

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
      noVisitantes: new FormControl(null, Validators.min(1))
    })
  }

  getForm(): FormGroup {
    return this.formularioDatos;
  }

}
