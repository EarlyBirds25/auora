import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlansSectionComponent } from './floor-plans-section.component';

describe('FloorPlansSectionComponent', () => {
  let component: FloorPlansSectionComponent;
  let fixture: ComponentFixture<FloorPlansSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloorPlansSectionComponent]
    });
    fixture = TestBed.createComponent(FloorPlansSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
