import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  roles: any = { 0: "student", 2: "admin", 3: 'faculty' }
  role: any = ''
  baseurl: any = "https://cse-club-backend.onrender.com";

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
          return res
        })
      )
    );
  }

  handleResponse(res: any) {
    return res
  }

  getRole(i: any) {
    this.role = this.roles[i]
    this.setStorage('role', i)
    return this.roles[i]
  }

  getStorage(key: any) {
    let val: any = sessionStorage.getItem(key)
    return JSON.parse(decodeURIComponent(window.atob(val)));
  }

  setStorage(key: any, value: any) {
    value = window.btoa((encodeURIComponent(JSON.stringify(value))));
    sessionStorage.setItem(key, value)
  }


}
