import { Component } from '@angular/core';
import { PedidoService } from '../../pedido-service';
import { Pedido } from '../../Pedido';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  nombre : string  = ""
  descripcion : string = ""

  constructor(public pedidoService : PedidoService){}

  agregarPedido(){
      this.pedidoService.agregarPedido(this.nombre, this.descripcion)
  
  }
}
