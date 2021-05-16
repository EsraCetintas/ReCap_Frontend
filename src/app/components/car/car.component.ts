import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDto[] = [];
  currentCar: CarDto;
  dataLoaded = false;
  brands: Brand[];
  colors: Color[];
  filterText = '';

  brandId: number;
  colorId: number;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId'] && params['brandId']) {
        this.getCarsByColorByBrand(params['colorId'], params['brandId']);
      } 
      else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      }
      else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }
      else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  setCurrentcar(car: CarDto) {
    this.currentCar = car;
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getById(id: number) {
    this.carService.getById(id).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorByBrand(colorId: number, brandId: number) {
    this.carService
      .getCarsByColorByBrand(colorId, brandId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
  }

  getCurrentCarClass(car: CarDto) {
    if (car == this.currentCar) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
 
}
