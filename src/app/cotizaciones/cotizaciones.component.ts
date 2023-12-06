import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
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
export class CotizacionesComponent implements OnInit, AfterViewInit{

  @ViewChild(PrimerStepComponent) primerStep: PrimerStepComponent;
  @ViewChild(SecondStepComponent) segundoStep: SecondStepComponent;
  paquetes:string[] = ['Paquete 1', 'Paquete 2', 'Paquete 3', 'Paquete 4'];
  firstForm: FormGroup;
  secondForm: FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.firstForm = this.primerStep.getForm();
    this.secondForm = this.segundoStep.getForm();
  }

}
