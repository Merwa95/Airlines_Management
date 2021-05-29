import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReservationComponent } from './map-reservation.component';

describe('MapReservationComponent', () => {
  let component: MapReservationComponent;
  let fixture: ComponentFixture<MapReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
