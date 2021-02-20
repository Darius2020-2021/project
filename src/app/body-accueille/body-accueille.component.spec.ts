import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAccueilleComponent } from './body-accueille.component';

describe('BodyAccueilleComponent', () => {
  let component: BodyAccueilleComponent;
  let fixture: ComponentFixture<BodyAccueilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAccueilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAccueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
