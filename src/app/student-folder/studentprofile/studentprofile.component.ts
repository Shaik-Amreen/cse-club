import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css'],
})
export class StudentprofileComponent implements OnInit {
  studentDetails: any;
  imagemodal: string = 'none';
  display = false;
  link: any;
  documentModal = 'none';
  linkName: any;

  constructor(
    private commonService: CommonService,
    private httpClient: HttpClient
  ) {
    let rollnumber = this.commonService.getStorage('rollnumber');
    this.httpClient
      .post('http://localhost:3000/student/findStudent', {
        rollnumber: rollnumber,
      })
      .subscribe((res: any) => {
        this.studentDetails = res;
        this.studentDetails.details.documents.forEach(
          (data: any, index: any) => {
            let link = data.link.substring(
              data.link.lastIndexOf('d/') + 2,
              data.link.lastIndexOf('/view')
            );
            data.downloadLink =
              'https://drive.google.com/u/0/uc?id=' + link + '&export=download';
          }
        );
      });
  }

  ngOnInit(): void {
    // let keys = Object.keys(this.studentDetails.details.documents)
    // keys.filter((key)=>{return key.toLowerCase.includes('link')})
  }

  image = '../../../assets/user.png';
  tempimg = '../../../assets/user.png';
  handleFileSelect(evt: any) {
    var reader = new FileReader();
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.tempimg = event.target.result;
      // this.tempimg = this.image
      // console.log(this.data.profilepic)
    };
    evt.target.value = '';
  }

  saveimg: any = 'save';
  popup: any = '';
  data: any;
  remove() {
    this.tempimg = '../../../../assets/user.png';
  }

  save() {
    this.image = this.tempimg;
    this.data.details.profilepic = this.image;
    this.saveimg = 'saving...';
    // this.commonService
    //   .postrequest('/Studentdata/updatestudentdatac', this.data)
    //   .subscribe((res: any) => {
    //     this.imagemodal = 'none';
    //     this.saveimg = 'save';
    //     this.display = true;
    //     this.popup = 'SUCCESSFULLY SAVED';
    //     setTimeout(() => {
    //       this.display = false;
    //       sessionStorage.removeItem('successpopup');
    //     }, 5000);
    //   });
  }

  documentSubmit() {
    let index = this.studentDetails.details.documents.findIndex(
      (data: any) => data.name == this.linkName
    );
    this.studentDetails.details.documents[index].link = this.link;
    this.studentDetails.details.documents[index].downloadLink =
      'https://drive.google.com/u/0/uc?id=' + this.link.substring(this.link.lastIndexOf('d/') + 2,this.link.lastIndexOf('/view')) + '&export=download';
    this.httpClient
      .post('http://localhost:3000/student/updateStudent', this.studentDetails)
      .subscribe((res: any) => {});
    this.link = '';
    this.documentModal = 'none'
  }

  documentViewModal(data:any){
    this.linkName = data
    this.documentModal = 'display';
  }
}
