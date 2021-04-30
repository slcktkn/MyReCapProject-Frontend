import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

constructor(private httpClient:HttpClient) { }

apiUrl="https://localhost:44344/api/";

getCars():Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"cars/getall"
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
  let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

getCarDetailsById(carId:number):Observable<SingleResponseModel<Car>>{
  let newPath=this.apiUrl+"cars/details?carId="+carId;
  return this.httpClient.get<SingleResponseModel<Car>>(newPath);
}

add(car:Car):Observable<ListResponseModel<Car>>{
  return this.httpClient.post<ListResponseModel<Car>>(this.apiUrl+"cars/add",car);
}


}
