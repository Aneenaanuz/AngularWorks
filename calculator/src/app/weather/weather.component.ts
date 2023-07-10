import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private http:HttpClient){

  }

  weather_data:any
  spinner_class=" "

  weatherForm=new FormGroup({
    place:new FormControl("",Validators.required)
  })

get place(){
  return this.weatherForm.get("place")
}

findWeather(){
  let place_name=this.weatherForm.get("place")?.value;
  this.spinner_class="spinner-grow"

  // fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&q=${place_name}`).then(res=>res.json()).
  // then(data=>{this.weather_data=data 
  //   this.spinner_class=""})

  this.http.get(`https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&q=${place_name}`).subscribe(data=>{this.weather_data=data 
  this.spinner_class=""})


  
}


}
