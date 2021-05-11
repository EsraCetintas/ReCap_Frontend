import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarComponent } from '../components/car/car.component';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44383/api/';

  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcardetails";
   return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getbyid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getCarsByBrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
   }

   getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getCarsByColorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
   }

}
