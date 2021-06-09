import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLigneComponent } from './modify-ligne.component';

describe('ModifyLigneComponent', () => {
  let component: ModifyLigneComponent;
  let fixture: ComponentFixture<ModifyLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
