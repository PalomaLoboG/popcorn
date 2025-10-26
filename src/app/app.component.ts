import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; // Para los botones del menú
import { MatIconModule } from '@angular/material/icon';     // (opcional) si usas iconos



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_pelis';
}
