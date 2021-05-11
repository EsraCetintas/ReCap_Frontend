import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { CarService } from './car.service';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl="https://localhost:44383/api/";

  constructor(private httpClient:HttpClient) { }

  
  getCarDetails():Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcardetails?carId=";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  
}
