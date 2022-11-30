import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() task: any = false;
  @Input() verify: any = false
  @Output() actionDone: EventEmitter<any> = new EventEmitter();
  submitted: any = false
  rating: any = ''
  link: any = ''

  constructor(public activeModal: NgbActiveModal, private commonService: CommonService) {
    this.clearForm()
  }


  ngOnInit(): void {
    this.ngOnInitCall()
  }

  ngOnInitCall() {
    if (this.verify) {
      if (this.verify.verified) {
        this.rating = this.verify.rating
      }
    }
  }

  clearForm() {
    this.submitted = false
  }


  submit() {
    this.submitted = true
    if (this.link != '') {
      let request = {
        taskId: this.task._id,
        rollnumber: this.task.rollnumber,
        driveLink: this.link,
        verified: false,
        rating: null,
        submittedOn: new Date()
      }
      this.commonService.postrequest('/submission/postSubmission', request).subscribe((res: any) => {
        this.activeModal.close('Close click')
        this.actionDone.emit('done');
      })
    }
  }

  submitRating() {
    this.submitted = true
    if (this.rating != '') {
      let request = {
        taskId: this.verify.taskId,
        rollnumber: this.verify.rollnumber
      }

      let updateData = {
        rating: this.rating,
        verified: true
      }

    

      this.commonService.postrequest('/submission/updateSubmission', request, updateData).subscribe((res: any) => {
        this.activeModal.close('Close click')
        this.actionDone.emit('done');
      })
    }
  }

}
