import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { from } from 'rxjs';
import { CarPipePipe } from './pipes/car-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailComponent,
    CurrencyPipe,
    CarPipePipe,
    BrandPipePipe,
    ColorPipePipe,
    BrandComponent,
    ColorComponent,
    RentalAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
