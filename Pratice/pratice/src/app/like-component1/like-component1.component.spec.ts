import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent1Component } from './like-component1.component';

describe('LikeComponent1Component', () => {
  let component: LikeComponent1Component;
  let fixture: ComponentFixture<LikeComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
