import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  dataLoaded = false;
  images: CarImage[];
  currentCar: CarDto;
  constructor(private carService: CarService,private carImageService: CarImageService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImages(params["carId"])
        this.getById(params["carId"])
      }
    })
  }
 
  getById(id:number){
    this.carService.getById(id).subscribe((response) => {
      let items:any=response.data
      this.currentCar=items[0];
      this.dataLoaded=true;
    })
  }
  
  getCarImages(carId: number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.images = response.data;
      this.dataLoaded = true;
      console.log(response.data)
    });
  }
}
