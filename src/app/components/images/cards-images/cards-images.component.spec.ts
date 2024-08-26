import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsImagesComponent } from './cards-images.component';

describe('CardsImagesComponent', () => {
  let component: CardsImagesComponent;
  let fixture: ComponentFixture<CardsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
