export interface RentalDto{
    rentalId:number;
    carId:number;
    customerId:number;
    firstName:string;
    lastName:string;
    brand:string;
    color:string;
    email:string;
    companyName:string;
    dailyPrice:number,
    modelYear:number,
    rentDate:Date;
    returnDate:Date;
}