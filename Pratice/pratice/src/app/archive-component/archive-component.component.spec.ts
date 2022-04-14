import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponentComponent } from './archive-component.component';

describe('ArchiveComponentComponent', () => {
  let component: ArchiveComponentComponent;
  let fixture: ComponentFixture<ArchiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
