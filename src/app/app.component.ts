import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFacheroComponent } from './header-fachero/header-fachero.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFacheroComponent, HeroComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'polleriaPractica';
}
