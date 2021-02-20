import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndAccueilleComponent } from './end-accueille.component';

describe('EndAccueilleComponent', () => {
  let component: EndAccueilleComponent;
  let fixture: ComponentFixture<EndAccueilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndAccueilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndAccueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
