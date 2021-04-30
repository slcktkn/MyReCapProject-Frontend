import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  car: Car;

  dataLoaded = false;
  apiUrl: string = 'https://localhost:44344';

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailById(params['carId']);
    });
  }

  getCarDetailById(carId: number) {
    return this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.car = response.data;
      console.log('veri geliyor');
      this.dataLoaded = true;
    });
  }
}
