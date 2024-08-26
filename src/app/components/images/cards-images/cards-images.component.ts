import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CardsImagesService } from '../../../services/cards-images.service';
import { CardsImagesResponse } from '../../../common/interfaces/CardsImages.interface';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalViewImageComponent } from './components/modal-view-image/modal-view-image.component';
import {FormsModule} from '@angular/forms';
const MATERIAL_MODULES =[MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule ]


@Component({
  selector: 'app-cards-images',
  standalone: true,
  imports: [ReactiveFormsModule, MATERIAL_MODULES, CardComponent, HttpClientModule, CommonModule, FormsModule],
  providers: [CardsImagesService],
  templateUrl: './cards-images.component.html',
  styleUrl: './cards-images.component.scss'
})
export class CardsImagesComponent implements OnInit  {

  cardsImages:Array<CardsImagesResponse>=[]
  filteredCardsImages: Array<CardsImagesResponse> = [];
  searchControl = new FormControl('');
  value = 'Clear me';
 constructor(
  private cardsImagesService:CardsImagesService,
  private dialog: MatDialog,
 ){

 }



ngOnInit(){
  this.uploadImages() 

  this.searchControl.valueChanges.subscribe((searchText: any) => {
    this.filteredCardsImages = this.cardsImages.filter(card =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });




}

trackByFn(index: number, item: any) {
  return item.id; 
}

uploadImages(){
  this.cardsImagesService.getImages().subscribe(res =>{
    if(res.length > 0){
      this.cardsImages = res;
      this.filteredCardsImages = res;
    }else{
      alert('No se encontraron imagenes')
    }
  })
}

openModal(element:CardsImagesResponse){
  this.dialog.open(ModalViewImageComponent, {
    data:element
  })
}



}
