import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLigneComponent } from './map-ligne.component';

describe('MapLigneComponent', () => {
  let component: MapLigneComponent;
  let fixture: ComponentFixture<MapLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
