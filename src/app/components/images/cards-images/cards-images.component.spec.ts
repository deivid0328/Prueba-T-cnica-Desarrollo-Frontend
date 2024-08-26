import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CardsImagesResponse } from '../../../common/interfaces/CardsImages.interface';
import { CommonModule } from '@angular/common';
import { CardsImagesComponent } from './cards-images.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Solo esto si usas animaciones
import { ModalViewImageComponent } from './components/modal-view-image/modal-view-image.component';


describe('CardsImagesComponent', () => {
  let component: CardsImagesComponent;
  let fixture: ComponentFixture<CardsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsImagesComponent, CommonModule, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load images on ngOnInit', () => {
    const mockImages: CardsImagesResponse[] = [
      { albumId: 1,  id: 1, title: 'Image 1', thumbnailUrl: 'url1', url:'url1' },
      { albumId:2,  id: 2, title: 'Image 2', thumbnailUrl: 'url2', url:'url2' }
    ];
  
    // Espía en el método `getImages` del servicio
    spyOn(component['cardsImagesService'], 'getImages').and.returnValue(of(mockImages));
    component.ngOnInit();
  
    expect(component.cardsImages.length).toBe(2);
    expect(component.filteredCardsImages.length).toBe(2);
  });



  it('should open modal with the correct data', () => {
    const mockImage:CardsImagesResponse =  { albumId: 1,  id: 1, title: 'Image 1', thumbnailUrl: 'url1', url:'url1' }
    // Espía en el método `open` del servicio `MatDialog`
    const dialogSpy = spyOn(component['dialog'], 'open').and.callThrough();
  
    component.openModal(mockImage);
  
    expect(dialogSpy).toHaveBeenCalledWith(ModalViewImageComponent, {
      data: mockImage
    });
  });

});


