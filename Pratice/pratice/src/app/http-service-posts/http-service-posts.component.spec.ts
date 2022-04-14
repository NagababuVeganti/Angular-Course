import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServicePostsComponent } from './http-service-posts.component';

describe('HttpServicePostsComponent', () => {
  let component: HttpServicePostsComponent;
  let fixture: ComponentFixture<HttpServicePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpServicePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServicePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
