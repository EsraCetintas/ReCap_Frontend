import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44383/api/rentals/getrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<RentalDto>> {
   return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);
  }
}
