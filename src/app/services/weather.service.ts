import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../pages/weather-today/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = ''; // 👈 Your API Token
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get<WeatherData>(this.apiUrl, { params });
  }
}
