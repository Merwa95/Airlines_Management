import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVolComponent } from './modify-vol.component';

describe('ModifyVolComponent', () => {
  let component: ModifyVolComponent;
  let fixture: ComponentFixture<ModifyVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
