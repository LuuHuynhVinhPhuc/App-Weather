import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-weather-today',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-today.component.html',
  styleUrl: './weather-today.component.scss',
})
export class WeatherTodayComponent implements OnInit {
  weatherData: WeatherData | null = null;
  searchQuery: string = '';
  currentDate: Date = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather('Thanh pho Ho Chi Minh, VN'); // Load mặc định
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.fetchWeather(this.searchQuery);
    }
  }

  fetchWeather(city: string): void {
    this.weatherService.getWeatherByCity(city).subscribe({
      next: (data: WeatherData) => {
        this.weatherData = data;
      },
      error: () => {
        alert('City not found!');
      },
    });
  }
}
