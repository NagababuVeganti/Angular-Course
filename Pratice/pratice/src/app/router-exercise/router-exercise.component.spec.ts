import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterExerciseComponent } from './router-exercise.component';

describe('RouterExerciseComponent', () => {
  let component: RouterExerciseComponent;
  let fixture: ComponentFixture<RouterExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
