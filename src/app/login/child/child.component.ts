import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input()
  someProperty: any = 'hello'

  constructor() {
    console.log(this.someProperty)
  }
  ngDoCheck() {
    console.log("hellos", this.someProperty, "ng Do check")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("on chane")
    console.log(changes.someProperty, "i am change in component");
  }
}
