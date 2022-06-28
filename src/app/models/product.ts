export class Product {
    id: number;
    nombre: string;
    precio: string;
    old_precio: string;
    caducidad: string;
    unidades: string;
    imagen: string;
    video: string;

    constructor(id=0, nombre = '', precio = '',old_precio='', caducidad = '', unidades = '', imagen = '', video = ''){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.old_precio = old_precio
        this.caducidad = caducidad
        this.unidades = unidades
        this.imagen = imagen
        this.video = video
    }
}
