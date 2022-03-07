import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlGroupArrayComponent } from './form-control-group-array.component';

describe('FormControlGroupArrayComponent', () => {
  let component: FormControlGroupArrayComponent;
  let fixture: ComponentFixture<FormControlGroupArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlGroupArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlGroupArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
