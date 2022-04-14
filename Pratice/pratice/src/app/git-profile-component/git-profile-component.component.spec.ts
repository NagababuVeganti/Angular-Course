import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProfileComponentComponent } from './git-profile-component.component';

describe('GitProfileComponentComponent', () => {
  let component: GitProfileComponentComponent;
  let fixture: ComponentFixture<GitProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
