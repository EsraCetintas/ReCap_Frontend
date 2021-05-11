import { CarImage } from "./carImage";

export interface CarDto{
    carId:number,
    brandName:string;
    colorName:string;
    modelYear:string;
    dailyPrice:number;
    description:string;
    carName:string;
    carImage:CarImage[];
}