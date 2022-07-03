import { Injectable } from '@angular/core';
// import { Producto } from "../interface/producto.interface";
import { HttpClient } from "@angular/common/http";
import { InfoProducto } from '../interface/producto.interface';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';
import { productUrl } from '../config/api';

const apiUrl = 'http://localhost:3000/producto';

@Injectable({
  providedIn: 'root'
})

export class InfoProductoService {
  //info: InfoProducto = {};
  //cargando = false;
  //producto: any = [];
  
  constructor(private http: HttpClient) {
    //this.cargarProducto();
    this.getProducts();
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl);
  }

  // private cargarProducto(){
  //   this.http.get('https://proyecto-la-casona-default-rtdb.firebaseio.com/producto.json')
  //   .subscribe((resp) => {
  //       //this.cargando= true;
  //       console.log(resp);
  //       this.producto = resp;
  //       setTimeout(() => {
  //         this.cargando=true
  //       }, (2000));
  //   });
  // }
}
