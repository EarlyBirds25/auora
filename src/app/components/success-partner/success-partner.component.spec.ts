import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPartnerComponent } from './success-partner.component';

describe('SuccessPartnerComponent', () => {
  let component: SuccessPartnerComponent;
  let fixture: ComponentFixture<SuccessPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessPartnerComponent]
    });
    fixture = TestBed.createComponent(SuccessPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
