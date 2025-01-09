import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit{
  constructor(private weatherService: WeatherService){}
  initialCityName = 'Curitiba';
  weatherDatas!: WeatherDatas;

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string): void{
    this.weatherService.getWeatherCity(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error),
    })
  }
}
