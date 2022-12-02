import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
noLoader:any=false
  feedback: any = [
    {
      label: "section 1", questions: [
        { question: "", rating: "" },
        { question: "Preparation, Planning and Organization of Lecture	", rating: "" },
    { question: "Teacher’s Knowledge in the Subject", rating: "" },
    { question: "Coverage of Syllabus", rating: "" },
    { question: "Providing relevant examples and demonstrations to illustrate concepts & Skills", rating: "" },
    { question: "Command over English, Communication Skills and Clarity of Teacher’s Voice", rating: "" },
    { question: "Advise on Exam Papers, Assignments etc", rating: "" },
    { question: "Punctuality and Maintenance of Discipline in the class room	 ", rating: "" },
    { question: "Accessibility of the teacher in and out of the class	", rating: "" },
    { question: "Ability to design tests/assignments/ examinations/ projects to evaluate understanding of the course", rating: "" },
    { question: "Overall Rating", rating: "" } ]}
    ,
    { label: "section 2", questions: [{ question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }] }
  ]


  rate: any = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

  display(feedidx: any, queidx: any, r: any) {
    this.feedback[feedidx].questions[queidx].rating=r
  }
  
    
  

 
  

}
