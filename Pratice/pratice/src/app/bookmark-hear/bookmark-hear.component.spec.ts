import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkHearComponent } from './bookmark-hear.component';

describe('BookmarkHearComponent', () => {
  let component: BookmarkHearComponent;
  let fixture: ComponentFixture<BookmarkHearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkHearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkHearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
