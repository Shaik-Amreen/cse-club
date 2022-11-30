import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-submission',
  templateUrl: './view-submission.component.html',
  styleUrls: ['./view-submission.component.css']
})
export class ViewSubmissionComponent implements OnInit {
  task: any = {}; submissions: any = []; request: any = {}; role: any = ''; rollnumber: any = '';
  search: any = ''
  constructor(private commonService: CommonService, private router: Router) {
    this.constructorCall()
  }

  constructorCall() {

    this.role = this.commonService.getStorage('role');
    this.role = this.commonService.getRole(this.role);
    this.request = {}
    if (this.role == 'student') {
      this.rollnumber = this.commonService.getStorage('rollnumber')
      this.request.rollnumber = this.rollnumber
      this.commonService.postrequest('/submission/findSubmission', this.request).subscribe((res: any) => {
        this.submissions = res.submissions
      })
    }
    else {
      this.commonService.postrequest('/submission/findSubmissions', {}).subscribe((res: any) => {
        this.submissions = res.submissions
      })
    }
  }

  ngOnInit(): void {
  }



  filterSubmission() {

    if (this.search != '') {
      let data = this.submissions.filter((e: any) => (e.course?.toLowerCase().includes(this.search.toLowerCase()) || e.rollnumber?.toLowerCase().includes(this.search.toLowerCase())
        || e.name?.toLowerCase().includes(this.search.toLowerCase()) || e.rating == this.search
        || e.department?.toLowerCase().includes(this.search.toLowerCase()) || e.topic?.toLowerCase().includes(this.search.toLowerCase()) || e.heading?.toLowerCase().includes(this.search.toLowerCase()) || e.year == this.search))
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






}
