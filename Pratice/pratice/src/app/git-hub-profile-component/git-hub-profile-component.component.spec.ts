import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProfileComponentComponent } from './git-hub-profile-component.component';

describe('GitHubProfileComponentComponent', () => {
  let component: GitHubProfileComponentComponent;
  let fixture: ComponentFixture<GitHubProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
