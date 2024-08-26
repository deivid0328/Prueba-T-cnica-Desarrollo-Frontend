import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CardsImagesResponse } from '../../../../../common/interfaces/CardsImages.interface';
import { NgxSpinnerService } from 'ngx-spinner';

const MATERIAL_MODULES =[MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatDialogModule]


@Component({
  selector: 'app-modal-view-image',
  standalone: true,
  imports: [ReactiveFormsModule, MATERIAL_MODULES,  HttpClientModule, CommonModule],
  templateUrl: './modal-view-image.component.html',
  styleUrl: './modal-view-image.component.scss'
})
export class ModalViewImageComponent implements OnInit {


  constructor(
  @Inject(MAT_DIALOG_DATA) public data: CardsImagesResponse,
  private dialogRef: MatDialogRef<ModalViewImageComponent>,
  private spinner: NgxSpinnerService,){
  }

  ngOnInit(): void {
    this.spinner.show()
    
  }



  close(){
    this.dialogRef.close();
  }

  onImageLoad(){
    this.spinner.hide();
  }

}
