import { Component } from '@angular/core';
import { InfoProductoService } from './services/infoproduct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto La Casona';
  
  constructor( public servicio: InfoProductoService){
  }
  
}
