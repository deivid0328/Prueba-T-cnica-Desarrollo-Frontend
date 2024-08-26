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
  imports: [CommonModule, ReactiveFormsModule, MATERIAL_MODULES, CardComponent, HttpClientModule, FormsModule],
  providers: [CardsImagesService],
  templateUrl: './cards-images.component.html',
  styleUrl: './cards-images.component.scss'
})
export class CardsImagesComponent implements OnInit  {

  cardsImages:Array<CardsImagesResponse>=[]
  filteredCardsImages: Array<CardsImagesResponse> = [];
  searchControl = new FormControl('');
  imageFavorite:  Array<any> = [];
  selectImage:any 
 constructor(
  private cardsImagesService:CardsImagesService,
  private dialog: MatDialog,
 ){

 }



ngOnInit(){
  this.uploadImages() 

  this.searchControl.valueChanges.subscribe((searchText: string | null) => {
    const filterText = searchText?.toLowerCase() ?? '';  
    this.filteredCardsImages = this.cardsImages.filter(card =>
      card.title.toLowerCase().includes(filterText)
    );
  });

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


itemFavorite(id:number){
  
  this.selectImage = this.cardsImages.find(item => item.id == id )
  console.log("seleccion",this.selectImage)
  this.imageFavorite.push(this.selectImage)
  console.log("array de data",this.imageFavorite)
} 


}
