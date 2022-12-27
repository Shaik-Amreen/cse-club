import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input() someProperty: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.someProperty, "child one component")
  }

}
