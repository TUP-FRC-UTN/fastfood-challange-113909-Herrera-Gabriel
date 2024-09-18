import { Component } from '@angular/core';
import { PedidoService } from '../../pedido-service';
import { Pedido } from '../../Pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  constructor(public pedidoService : PedidoService){}

  entregar(pedido: Pedido) {
    this.pedidoService.entregar(pedido)
    }
}
