import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { FoodApiService } from './food-api.service';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './Components/Carousel Family/carousel/carousel.component';
//import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,FormsModule,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CookJoy';
  item="";

  foodServ=inject(FoodApiService);
  getFoodItem(){
    this.foodServ.getFood(this.item).subscribe((data:any)=>{
      this.item=data;
    })
  }
}
