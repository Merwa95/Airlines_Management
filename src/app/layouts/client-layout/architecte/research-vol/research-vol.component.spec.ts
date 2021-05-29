import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchVolComponent } from './research-vol.component';

describe('ResearchVolComponent', () => {
  let component: ResearchVolComponent;
  let fixture: ComponentFixture<ResearchVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
