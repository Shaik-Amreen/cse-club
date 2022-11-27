import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  questions: any = [{ question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" },
   {question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }, { question: "rate me", rating: "" }]


  rate: any = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

  display(queidx:any, r:any) {
    this.questions[queidx].rating=r
    
  }
  
    
  

 
  

}
