import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVolComponent } from './result-vol.component';

describe('ResultVolComponent', () => {
  let component: ResultVolComponent;
  let fixture: ComponentFixture<ResultVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
