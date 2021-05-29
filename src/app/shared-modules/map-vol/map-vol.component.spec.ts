import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVolComponent } from './map-vol.component';

describe('MapVolComponent', () => {
  let component: MapVolComponent;
  let fixture: ComponentFixture<MapVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
