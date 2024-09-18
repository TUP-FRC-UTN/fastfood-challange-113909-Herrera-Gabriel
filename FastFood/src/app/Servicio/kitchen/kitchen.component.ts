import { Component } from '@angular/core';
import { PedidoService } from '../../pedido-service';
import { Pedido } from '../../Pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  constructor(public pedidoService : PedidoService){}

  cocinar(pedido : Pedido) {
    this.pedidoService.cocinar(pedido);
  }

  terminar() {
    this.pedidoService.terminar();
  }
}
