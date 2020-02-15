import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGalleryComponent } from './portfolio-gallery.component';

describe('PortfolioGalleryComponent', () => {
  let component: PortfolioGalleryComponent;
  let fixture: ComponentFixture<PortfolioGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
