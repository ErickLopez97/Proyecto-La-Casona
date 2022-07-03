export class Product {
    id: number;
    nombre: string;
    precio: string;
    old_precio: string;
    caducidad: string;
    unidades: string;
    imagen: string;
    video: string;
    star:number;

    constructor(id=0, nombre = '', precio = '',old_precio='', caducidad = '', unidades = '', imagen = '', video = '',star=0){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.old_precio = old_precio
        this.caducidad = caducidad
        this.unidades = unidades
        this.imagen = imagen
        this.video = video
        this.star = star

    }
}
