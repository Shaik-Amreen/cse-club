import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared-folder/modal/modal.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  submissionView: any = false; task: any = []; search: any = ''; role: any; rollnumber: any = ''; request: any = ''


  constructor(private commonService: CommonService, private router: Router, private modalService: NgbModal) {
    this.constructorCall()
  }

  constructorCall() {
    this.role = this.commonService.getStorage('role');
    this.role = this.commonService.getRole(this.role);
    sessionStorage.removeItem('editTask')
    this.request = { role: this.role }
    if (this.role == "student") {
      this.rollnumber = this.commonService.getStorage('rollnumber')
      this.request.rollnumber = this.rollnumber
    }

    this.commonService.postrequest('/task/findAllTask', this.request, { attachments: 0, description: 0, _id: 1 }).subscribe((res: any) => {
      this.submissionView = res.submission;
      this.task = res.task
    })
  }

  ngOnInit(): void {
  }

  filterTask() {
    if (this.search != '') {
      let data = this.task.filter((e: any) => (e.topic.toLowerCase().includes(this.search.toLowerCase()) || e.heading.toLowerCase().includes(this.search.toLowerCase())))
      return data
    }
    return this.task
  }

  viewTask(id: any) {
    this.commonService.setStorage('taskId', id)
    this.router.navigate([`/${this.role}/task/viewTask`])
  }

  editTask(id: any) {
    this.commonService.setStorage('taskId', id)
    sessionStorage.setItem('editTask', 'true')
    this.router.navigate([`/${this.role}/task/postTask`])
  }


  displayModal(c: any, i: any) {
    c.rollnumber = this.rollnumber
    const modalRef = this.modalService.open(ModalComponent, { windowClass: 'my-class' });
    modalRef.componentInstance.task = c;
    modalRef.componentInstance.actionDone.subscribe((receivedEntry: any) => {
      // this.constructorCall()
      if (receivedEntry == 'done') {
        this.task[i].submissionCount = true;
      }
    })
  }





}
