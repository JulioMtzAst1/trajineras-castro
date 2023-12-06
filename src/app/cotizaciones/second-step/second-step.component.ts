import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  paquetes = [
    {nombre: 'Paquete 1', valor: 1},
    {nombre: 'Paquete 2', valor: 2},
    {nombre: 'Paquete 3', valor: 3},
    {nombre: 'Paquete 4', valor: 4}
  ];
  formularioDatos: FormGroup;
  selectedPackage: any;
  numero: number = 0;

  constructor() { }

  ngOnInit() {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formularioDatos = new FormGroup({
      paquete: new FormControl(null, Validators.min(1))
    })
  }

  setPaquete() {
    this.formularioDatos.get('paquete').setValue(this.selectedPackage.valor);
  }

  getForm(): FormGroup {
    return this.formularioDatos;
  }
  
  imprimirFormulario() {
    console.log(this.formularioDatos.value);
  }

}
