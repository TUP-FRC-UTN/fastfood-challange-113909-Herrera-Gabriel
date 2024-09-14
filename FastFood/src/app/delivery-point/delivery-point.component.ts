import { Component, Input } from '@angular/core';
import { Pedido } from '../Pedido';


@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  @Input() listosParaEntregar: Pedido[] = [];

  entregarPedido(pedido: Pedido) {
      this.listosParaEntregar = this.listosParaEntregar.filter(p => p !== pedido);
  }
}
