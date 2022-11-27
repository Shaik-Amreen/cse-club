import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFolderComponent } from './faculty-folder.component';

describe('FacultyFolderComponent', () => {
  let component: FacultyFolderComponent;
  let fixture: ComponentFixture<FacultyFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
