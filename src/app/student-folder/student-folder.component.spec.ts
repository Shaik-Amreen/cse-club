import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFolderComponent } from './student-folder.component';

describe('StudentFolderComponent', () => {
  let component: StudentFolderComponent;
  let fixture: ComponentFixture<StudentFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
