import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackQuestionsComponent } from './add-feedback-questions.component';

describe('AddFeedbackQuestionsComponent', () => {
  let component: AddFeedbackQuestionsComponent;
  let fixture: ComponentFixture<AddFeedbackQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
