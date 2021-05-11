import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customerDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44383/api/customers/getcustomerdetails';

  constructor(private httpClient: HttpClient) {}

  getCustomers():Observable<ListResponseModel<CustomerDto>> {
   return this.httpClient.get<ListResponseModel<CustomerDto>>(this.apiUrl);
  }
}
