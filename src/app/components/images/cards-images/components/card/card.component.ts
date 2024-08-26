import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerService } from 'ngx-spinner';


const MATERIAL_MODULES =[MatCardModule, MatButtonModule, MatInputModule, MatIconModule]


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MATERIAL_MODULES],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

@Input() title!: string;
@Input() imageUrl!: string;
@Input() id!:number


constructor(
  private spinner: NgxSpinnerService
){

}


ngOnInit (){
  this.spinner.show()
}

onImageLoad(){
  this.spinner.hide();
}

}
