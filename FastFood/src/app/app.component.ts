import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from './Servicio/restaurant/restaurant.component';
import { PosComponent } from './Servicio/pos/pos.component';
//import { RestaurantComponent } from './Comunicacion-componentes/restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood';
}
