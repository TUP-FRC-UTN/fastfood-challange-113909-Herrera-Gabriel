import { Injectable } from "@angular/core";
import { Pedido } from "./Pedido";

@Injectable({
    providedIn: 'root'
})
export class PedidoService{
    pedidoIngresados: Pedido[] =[]
    pedidoCocinar: Pedido[] =[]
    pedidoCocinando: Pedido| undefined = undefined
    pedidosListos: Pedido[] = []

    constructor(){}

    agregarPedido(nombre: string, descripcion: string){
        const pedido = new Pedido(nombre, descripcion)
        this.pedidoIngresados.push(pedido)
        this.pedidoCocinar.push(pedido)
    }
    cocinar(pedido: Pedido) {
        if(this.pedidoCocinando == undefined){
            this.pedidoCocinando = pedido
            this.pedidoCocinar = this.pedidoCocinar.filter(p => p.number !== pedido.number)
        }
    }

    terminar() {
        if(this.pedidoCocinando != undefined){
            this.pedidosListos.push(this.pedidoCocinando)
        }
        this.pedidoCocinando = undefined;
    }

    entregar(pedido: Pedido) {
        this.pedidosListos = this.pedidosListos.filter(p=> p != pedido)
    }

}