import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MatToolbarModule  } from '@angular/material/toolbar';
// import { CounterComponent } from "./components/counter/counter.component";
// import { ProductsComponent } from "./components/products/products.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgRx';
}
