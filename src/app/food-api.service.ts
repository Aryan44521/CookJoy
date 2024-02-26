import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodApiService {
  constructor(private http: HttpClient) {}

  getFood(q: string) {
    return this.http.get(
      'https://food-recipes-with-images.p.rapidapi.com/?q=' + q,
      {
        headers: {
          'X-RapidApi-Key':
            'e427127d4emshac47f873f7841bap12f090jsn9b23dbbb4b84',
          'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
        },
      }
    );
  }
}
