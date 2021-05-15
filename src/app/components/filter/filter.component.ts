import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { BrandComponent } from './brand/brand.component';
import { ColorComponent } from './color/color.component';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  currentColor:Color;
  currentBrand:Brand;
  @ViewChild(BrandComponent) child:BrandComponent;
  @ViewChild(ColorComponent) child2:ColorComponent;
  
  cars: CarDto[];
  dataLoaded=false;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    
  }
setCurrent(color:Color,brand:Brand){
this.currentColor=color;
this.currentBrand=brand;
this.getRouter()
}

getCars(){
  this.carService.getCars().subscribe((response) => {
    this.cars = response.data;
    this.dataLoaded = true;
  });
}
  getRouter(){
    console.log(this.currentColor.name);
    console.log(this.currentBrand.name);
    return "cars/color/{{currentColor.id}}/brand/{{currentBrand.id}}"
    
    
  }
}
