import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { POSComponent } from '../pos/pos.component';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../Pedido';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryPointComponent, KitchenComponent, POSComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  pedidosPendientes: Pedido[] = []
  pedidosListos: Pedido[] = []

  agregarPedido(pedido: Pedido) {
      this.pedidosPendientes.push(pedido);

  }

  pedidoListo(pedido: Pedido) {
      this.pedidosListos.push(pedido);
  }
}
