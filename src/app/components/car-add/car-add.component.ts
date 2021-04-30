import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

    car:Car=new Car();
    carAddForm:FormGroup;

  constructor(private carService:CarService,
    private formBuilder:FormBuilder,
    private alertifyService:AlertifyService) { }


    

  ngOnInit() {
    this.carAddForm = new FormGroup({
      'carName' : new FormControl(null,Validators.required),
      'description' : new FormControl(null,Validators.required),
      'modelYear' : new FormControl(null,Validators.required),
      'dailyPrice' : new FormControl(null,Validators.required),
      'brandId' : new FormControl(null,Validators.required),
      'carImageUrl' : new FormControl(null,Validators.required),
      'colorId' : new FormControl(null,Validators.required),
      'carId' : new FormControl(null,Validators.required)

    });

    
      // this.carAddForm = this.formBuilder.group({
      // carName: ['', Validators.required],
      // description: ['', Validators.required],
      // modelYear: ['', Validators.required],
      // colorId: ['', Validators.required],
      // carId: ['', Validators.required],
      // dailyPrice: ['', Validators.required],
      // brandId: ['', Validators.required],
      // carImageUrl: ['', Validators.required],
      // });
  }

  onSubmit(){
    console.log(this.car);
  }

  add (){
    
    if(this.carAddForm.valid){
      console.log(this.car);
      this.car=Object.assign({},this.carAddForm.value)
    
      this.carService.add(this.car).subscribe();
      }
    }
  }
