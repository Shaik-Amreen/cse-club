import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  roles: any = { 0: '/student', 2: "/admin", 3: '/faculty' }

  baseurl: any = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postrequest(url: any, condition: any, responseDetails: any = { _id: 0 }) {
    if (url == '/verify') {
      return this.http.post(this.baseurl + url, condition)
    }
    else {
      return this.postText(this.baseurl + url, condition, responseDetails)
    }
  }

  postText(url: string, condition: any, responseDetails: any): Observable<any> {
    let request: any = { condition: condition, responseDetails: responseDetails }
    request = window.btoa((encodeURIComponent(JSON.stringify(request))));
    return this.handleResponse(
      this.http.post(url, { data: request }).pipe(
        map((res: any) => {
          res = JSON.parse(decodeURIComponent(window.atob(res.data)));
          console.log("🚀 ~ file: common.service.ts ~ line 33 ~ CommonService ~ map ~ res", res)
          return res
        })
      )
    );
  }

  handleResponse(res: any) {
    return res
  }

  getRole(i: any) {
    return this.roles[i]
  }
}
