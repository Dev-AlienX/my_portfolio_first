import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonComponent } from './input-button.component';

describe('InputButtonComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
