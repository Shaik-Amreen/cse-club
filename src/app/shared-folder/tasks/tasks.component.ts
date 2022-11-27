import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private commonService: CommonService) {
    this.constructorCall()
  }

  constructorCall() {
    this.commonService.postrequest('/task/findAllTask', {}, { attachments: 0, description: 0 }).subscribe((res: any) => {
      console.log("🚀 ~ file: tasks.component.ts ~ line 17 ~ TasksComponent ~ this.commonService.postrequest ~ res", res);
    })
  }

  ngOnInit(): void {
  }

}
