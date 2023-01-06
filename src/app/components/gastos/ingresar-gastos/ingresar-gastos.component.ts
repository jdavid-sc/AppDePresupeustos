import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
  nombreGasto: string;
  cantidad:number;
  FormularioIncorrecto:boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {

    this.nombreGasto = '';
    this.cantidad = 0;
    this.FormularioIncorrecto = false;
    this.textIncorrecto = '';
   }

  ngOnInit(): void {
  }

  agregarGasto(){
    if(this.cantidad > this._presupuestoService.restante){
      this.FormularioIncorrecto = true
      this.textIncorrecto = 'cantidad ingresada es superior al restante'
      return
    }


    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.FormularioIncorrecto = true
      this.textIncorrecto = 'Gasto o cantidad ingresada incorrectamente'

    }else{
      //creamos un objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      //enviamos el objeto a los subscriptores via sobjet
      this._presupuestoService.agregarGasto(GASTO)



      this.FormularioIncorrecto = false
      this.nombreGasto = '';
      this.cantidad = 0;
    }

  }

}
