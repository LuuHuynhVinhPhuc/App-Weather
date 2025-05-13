import { Component } from '@angular/core';
import { WeatherHeaderComponent } from '../weather-header/weather-header.component';
import { WeatherTodayComponent } from '../weather-today/weather-today.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeatherTodayComponent, WeatherHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
