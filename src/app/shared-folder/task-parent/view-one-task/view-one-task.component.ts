import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared-folder/modal/modal.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-one-task',
  templateUrl: './view-one-task.component.html',
  styleUrls: ['./view-one-task.component.css']
})
export class ViewOneTaskComponent implements OnInit {
noLoader:any=false
  id: any = ''; task: any = {}; submissions: any = []; request: any = {}; role: any = ''; rollnumber: any = '';
  search: any = ''
  constructor(private commonService: CommonService, private router: Router, private modalService: NgbModal) {
    this.constructorCall()
  }

  constructorCall() {
    this.noLoader=false
    this.id = this.commonService.getStorage('taskId');
    this.role = this.commonService.getStorage('role');
    this.role = this.commonService.getRole(this.role);
    this.request = { role: this.role, _id: this.id }
    if (this.role == 'student') {
      this.rollnumber = this.commonService.getStorage('rollnumber')
      this.request.rollnumber = this.rollnumber
    }
    this.commonService.postrequest('/task/findTask', this.request).subscribe((res: any) => {
      this.submissions = res.submission;
      this.task = res.task
      this.noLoader=true
    })
  }

  ngOnInit(): void {
  }

  displayModal(c: any) {
    c = { ...c, ...this.task }
    const modalRef = this.modalService.open(ModalComponent, { windowClass: 'my-class' });
    modalRef.componentInstance.verify = c;
    modalRef.componentInstance.actionDone.subscribe((receivedEntry: any) => {
      this.constructorCall()
    })
  }

  filterSubmission() {

    if (this.search != '') {
      let data = this.submissions.filter((e: any) => (e.moreDetails.course.toLowerCase().includes(this.search.toLowerCase()) || e.moreDetails.rollnumber.toLowerCase().includes(this.search.toLowerCase())
        || e.moreDetails.name.toLowerCase().includes(this.search.toLowerCase()) || e.rating == this.search
        || e.moreDetails.department.toLowerCase().includes(this.search.toLowerCase()) || e.moreDetails.year == this.search))
      return data
    }
    return this.submissions
  }

  exportexcel(): void {
    const fileName = `${this.task.topic} ${this.task.heading} submissions List.xlsx`;
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, {
      raw: true,
    });
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }


  back() {
    this.router.navigate([`/${this.role}/task`])
  }


}
