import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
car:Car;
  cars:Car [];
  carImage:CarImage;
  dataLoaded=false;
 
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }else if(params["carId"]){
        this.getCarsDetailsById(params["carId"])
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else{
        this.getCars();
      }
    })
  }

  getCars(){
    return this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsDetailsById(carId:number){
    return this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.car=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColorId(colorId:number){
    return this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars= response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    return this.carService.getCarsByColorId(brandId).subscribe(response=>{
      this.cars= response.data;
      this.dataLoaded=true;
    })
  }

}
