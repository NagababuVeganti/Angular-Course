import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExceriseComponent } from './http-excerise.component';

describe('HttpExceriseComponent', () => {
  let component: HttpExceriseComponent;
  let fixture: ComponentFixture<HttpExceriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpExceriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpExceriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
