import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  brands:Brand []=[];
  apiUrl="https://localhost:44344/api/";

constructor(private httpClient:HttpClient) { }

getBrands():Observable<ListResponseModel<Brand>>{
  let newPath=this.apiUrl + "brands/getall";
  return this.httpClient.get<ListResponseModel<Brand>>(newPath);
}

getCarsByBrand(brandId:number){
  let newPath=this.apiUrl + "cars/getcarsbybrand?brandId="+brandId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

}
