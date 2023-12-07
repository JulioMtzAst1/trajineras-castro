import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  @Output() eventosSC = new EventEmitter<{evento: string, datos: any}>();
  paquetes = [
    {nombre: 'Paquete 1', valor: 1},
    {nombre: 'Paquete 2', valor: 2},
    {nombre: 'Paquete 3', valor: 3},
    {nombre: 'Paquete 4', valor: 4}
  ];
  formularioDatos: FormGroup;
  formularioValido:boolean = false;

  constructor() { }

  ngOnInit() {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formularioDatos = new FormGroup({
      paquete: new FormControl(null, Validators.min(1))
    });

    this.formularioDatos.statusChanges.subscribe(status => {
      this.formularioValido = status === 'VALID';
    });
  }

  setPaquete(valorPaquete: number) {
    this.formularioDatos.get('paquete').setValue(valorPaquete);
  }

  cotizarPaquete() {
    this.eventosSC.emit({ evento: 'mandarPaqueteCotizacion', datos: this.formularioDatos});
  }
  
  imprimirFormulario() {
    console.log(this.formularioDatos.value);
  }

  resetForm() {
    this.formularioDatos.get('paquete').patchValue(null);
  }

}
