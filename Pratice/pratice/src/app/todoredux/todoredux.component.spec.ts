import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoreduxComponent } from './todoredux.component';

describe('TodoreduxComponent', () => {
  let component: TodoreduxComponent;
  let fixture: ComponentFixture<TodoreduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoreduxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoreduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
