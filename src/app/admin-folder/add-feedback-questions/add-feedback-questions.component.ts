import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feedback-questions',
  templateUrl: './add-feedback-questions.component.html',
  styleUrls: ['./add-feedback-questions.component.css']
})
export class AddFeedbackQuestionsComponent implements OnInit {

  constructor() { }
  
  questions: any = [
    { question: "I)Preparation, Planning and Organization of Lecture	", rating: "" },
    { question: "II)Teacher’s Knowledge in the Subject", rating: "" },
    { question: "III)Coverage of Syllabus", rating: "" },
    { question: "IV)Providing relevant examples and demonstrations to illustrate concepts & Skills", rating: "" },
    { question: "V)Command over English, Communication Skills and Clarity of Teacher’s Voice", rating: "" },
    { question: "VI)Advise on Exam Papers, Assignments etc", rating: "" },
    { question: "VII)Punctuality and Maintenance of Discipline in the class room	 ", rating: "" },
    { question: "VIII)Accessibility of the teacher in and out of the class	", rating: "" },
    { question: "IX)Ability to design tests/assignments/ examinations/ projects to evaluate understanding of the course", rating: "" },
    { question: "X)Overall Rating", rating: "" } 
  ]
  rate: any = [1, 2, 3, 4, 5];
  ngOnInit(): void {
  }
  display( queidx: any, r: any) {
    this.questions[queidx].rating=r
  }

}
