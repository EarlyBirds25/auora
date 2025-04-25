import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomeSectionComponent } from './smart-home-section.component';

describe('SmartHomeSectionComponent', () => {
  let component: SmartHomeSectionComponent;
  let fixture: ComponentFixture<SmartHomeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartHomeSectionComponent]
    });
    fixture = TestBed.createComponent(SmartHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
