import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  taskForm: FormGroup
  submitted: any = false; formError: any = ""; invalidDate: any = false;
  constructor(private commonService: CommonService, private route: Router) {
    this.taskForm = new FormGroup({
      heading: new FormControl('', Validators.required),
      topic: new FormControl('', Validators.required),
      description: new FormControl(''),
      level: new FormControl('easy', Validators.required),
      attachments: new FormControl(''),
      deadline: new FormControl('', Validators.required),
      postedOn: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  clearStatus() {
    this.submitted = false
    this.formError = ""
    this.invalidDate = false
  }

  onSubmit() {
    this.submitted = true
    this.taskForm.value.postedOn = new Date()
    if (new Date(this.taskForm.value.deadline) <= new Date(this.taskForm.value.postedOn)) {
      this.invalidDate = true
    }
    else if (this.taskForm.status == "VALID") {
      this.taskForm.value.deadline = new Date(this.taskForm.value.deadline)
      this.commonService.postrequest('/task/postTask', this.taskForm.value).subscribe((res: any) => {
        console.log(res)
        this.route.navigate(['/admin'])
      });
    }
  }

}
