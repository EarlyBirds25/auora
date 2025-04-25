import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesSectionComponent } from './amenities-section.component';

describe('AmenitiesSectionComponent', () => {
  let component: AmenitiesSectionComponent;
  let fixture: ComponentFixture<AmenitiesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenitiesSectionComponent]
    });
    fixture = TestBed.createComponent(AmenitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
