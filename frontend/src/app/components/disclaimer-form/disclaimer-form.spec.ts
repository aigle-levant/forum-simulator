import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerForm } from './disclaimer-form';

describe('DisclaimerForm', () => {
  let component: DisclaimerForm;
  let fixture: ComponentFixture<DisclaimerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclaimerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
