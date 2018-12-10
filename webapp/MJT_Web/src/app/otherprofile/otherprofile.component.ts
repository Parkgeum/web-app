import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherprofileComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) {
  }

  information: proin;
  selectedUser: User;
  user: User[];


  ngOnInit() {
    this.otherInfo();
  }


  otherInfo(){
    localStorage.setItem('othername', 'sutest');

    let httpParams = new HttpParams()
    .append("username", localStorage.getItem('othername'))

    this.http.post('http://localhost:3000/member/userinfo', httpParams).subscribe((res: any) => {
      console.log("test"+ JSON.stringify(res));
      this.information = res.data;
      console.log("aaaaaaaaa  "+ this.information.username)
    });
  }


  // postUpload(user: User) {
  //   return this.http.post("http://localhost:3000/member/userinfo", {
  //     HttpClient: new Http({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'my-auth-token'
  //     })
  //   });
  // }

  // readonly baseUrls = 'http://localhost:3000/member/info';

  //   profile1() {
  //     var check = localStorage.getItem('profile')
  //     console.log(this.baseUrls + "/pro" + `/${check}`);
  //     this.http.get(this.baseUrls + "/pro" + `/${check}`).subscribe((res: any) => {
  //       console.log(JSON.stringify(res));
  //       this.proinfo = [res];
  //     })
  //   }




  //follow했을 경우 클릭시 목록 출력
  Clickfollower() {

    }


  //팔로잉하는 사람 리스트 출력
  following() {
    console.log("followingtest");
  }

}

interface proin {
  _id: string;
  id: string;
  username: string;
  email: string;
  password: string;
  following: string[];
  follower: string[];
  posts: string[];
  image: string;
  jsonWebToken: string;
}
