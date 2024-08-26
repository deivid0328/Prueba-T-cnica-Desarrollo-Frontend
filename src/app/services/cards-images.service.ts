import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardsImagesResponse } from '../common/interfaces/CardsImages.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsImagesService {



  constructor(private http:HttpClient) { }


  getImages(){
    return this.http.get<CardsImagesResponse[]>('https://jsonplaceholder.typicode.com/photos?albumId=1')
  }




}
