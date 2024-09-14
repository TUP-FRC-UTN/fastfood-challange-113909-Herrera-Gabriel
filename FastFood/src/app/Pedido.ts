export class Pedido{
    number: number; // Numero de pedido random de 1 a 1000
    name: string;  // Nombre del cliente
    description: string;  // Descripción del pedido
    date: Date; // Fecha de creación del pedido

    constructor(nombre: string, descripcion: string) {
        this.number = Math.floor(Math.random() * 1000) + 1
        this.name = nombre
        this.description = descripcion
        this.date = new Date()
    }
}