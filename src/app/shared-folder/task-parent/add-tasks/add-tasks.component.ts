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

  taskForm: FormGroup; id: any
  submitted: any = false; formError: any = ""; invalidDate: any = false; editTask: any = false
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
    this.constructorCall()
  }

  constructorCall() {
    this.id = this.commonService.getStorage('taskId');
    this.editTask = sessionStorage.getItem('editTask')
    if (this.editTask) {
      this.getTaskDetails()
    }
  }

  getTaskDetails() {
    this.commonService.postrequest('/task/findTaskToEdit', { _id: this.id }).subscribe((res: any) => {
      res.deadline = this.formatDate(new Date(res.deadline))
      this.taskForm.patchValue(res)
    })
  }

  formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  ngOnInit(): void {
  }

  clearStatus() {
    this.submitted = false
    this.formError = ""
    this.invalidDate = false
  }

  onSubmit() {
    this.submitted = true;
    let url = '', request = {}, response = {}
    if (this.editTask) { url = '/task/updateTask'; request = { _id: this.id }; response = this.taskForm.value }
    else { url = '/task/postTask'; request = this.taskForm.value }
    this.taskForm.value.postedOn = new Date()
    if (new Date(this.taskForm.value.deadline) <= new Date(this.taskForm.value.postedOn)) {
      this.invalidDate = true
    }
    else if (this.taskForm.status == "VALID") {
      this.taskForm.value.deadline = new Date(this.taskForm.value.deadline)
      this.commonService.postrequest(url, request, response).subscribe((res: any) => {
        this.route.navigate(['/admin'])
      });
    }
  }

}
