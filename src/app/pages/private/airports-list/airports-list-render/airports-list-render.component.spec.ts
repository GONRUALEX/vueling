import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsListRenderComponent } from './airports-list-render.component';

describe('AirportsListRenderComponent', () => {
  let component: AirportsListRenderComponent;
  let fixture: ComponentFixture<AirportsListRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportsListRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
