import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAccueilleComponent } from './head-accueille.component';

describe('HeadAccueilleComponent', () => {
  let component: HeadAccueilleComponent;
  let fixture: ComponentFixture<HeadAccueilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadAccueilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAccueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
