import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsDetallComponent } from './airports-detall.component';

describe('AirportsDetallComponent', () => {
  let component: AirportsDetallComponent;
  let fixture: ComponentFixture<AirportsDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportsDetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
