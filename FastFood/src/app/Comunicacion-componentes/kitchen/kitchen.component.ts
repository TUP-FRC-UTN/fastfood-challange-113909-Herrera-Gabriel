import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../../Pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  @Input() pedidosIngresados : Pedido[] = []
  @Output() pedidoTerminado = new EventEmitter<Pedido>()
  pedidoCocion : Pedido  | undefined = undefined
  
  Cocinar(pedido: Pedido) {
    if(this.pedidoCocion == null){
      this.pedidoCocion = pedido
      this.pedidosIngresados.filter(pedidoB => pedidoB !== pedido)
    }
  }
  Terminar() {
    if(this.pedidoCocion!= null){
      this.pedidoTerminado.emit(this.pedidoCocion)
      //this.pedidosIngresados.filter(pedido => this.pedidosIngresados.includes(this.pedidoCocion))
      
      this.pedidosIngresados = this.pedidosIngresados.filter(p => p !== this.pedidoCocion);
      this.pedidoCocion = undefined;
    }
    
    
    }
}
