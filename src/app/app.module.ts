import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NavComponent } from './components/nav/nav.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    CarComponent,
    CarDetailComponent,
    CarAddComponent,
    BrandComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
