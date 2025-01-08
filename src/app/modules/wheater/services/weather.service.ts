import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '';

  constructor(private http: HttpClient) { }

  getWeatherCity(cityName: string): Observable<any>{
    return this.http.get(
      ''
    )
  }
}
