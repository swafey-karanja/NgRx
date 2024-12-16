import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgRx';
}
