import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../Pedido';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

  nombre : string = ""
  descripcion : string = ""

  @Output() nuevoPedido = new EventEmitter<Pedido>()

  agregarPedido() {
    const pedido = new Pedido(this.nombre, this.descripcion)
    this.nuevoPedido.emit(pedido)
    
  }
}
