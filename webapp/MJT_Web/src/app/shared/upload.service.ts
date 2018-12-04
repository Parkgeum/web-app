import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Upload } from './upload.model';
import { User } from '../shared/user.model';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { environment } from '../../environments/environment';
// import {ma[]}
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  selectedUpload: Upload;
  upload: Upload[];
  // selectedUser: User;
  // user: User[];

  //보내줄 base주소 설정해줌
  readonly baseURL = 'http://localhost:3000/posts/upload';
  // readonly baseUrls = 'http://localhost:3000/member/info';



  constructor(private http: HttpClient) { }

  // this.getUser

  postUpload(uld: Upload) {
    return this.http.post(this.baseURL, uld, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }
}
