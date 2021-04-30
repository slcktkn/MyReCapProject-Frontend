import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandComponent } from './components/brand/brand.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cardetail/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
