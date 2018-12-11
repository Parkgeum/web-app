import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { observable } from 'rxjs';

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
  posts;
  follower;
  followings;
  username;
  id;


  ngOnInit() {
    this.otherInfo();
  }


  otherInfo() {
    localStorage.setItem('othername', 'sutest');

    let httpParams = new HttpParams()
      .append("username", localStorage.getItem('othername'))

      console.log(httpParams);

    this.http.post('http://localhost:3000/member/userinfo', httpParams).subscribe((res: any) => {
      this.information = res.data;
      this.follower = this.information.follower.length;
      this.followings = this.information.following.length;
      this.posts = this.information.posts.length;
      this.id = this.information.id;
      this.username = this.information.username;
    });
  }

  otherInfos() {
    localStorage.setItem('othername', 'sutest');

    let httpParamss = new HttpParams()
      .append("followuser", localStorage.getItem('othername'))
      .append("state", "On");

      console.log(httpParamss);

    var follower = localStorage.getItem('othername');
    var state = "On";

    console.log(follower + state);

    return this.http.post('http://localhost:3000//member/addfollowing', 
    {
      follower,
      state
    },
     {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    })
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





//   clickfollowing() {

//     var num = this.information.follower.length;
//     var state = "On";

//     var i = parseInt('0');
//     if (num == 0) {

//       let httpParams = new Http
//       .append("followuser", localStorage.getItem('othername'))
//       .append("state", state);

//       console.log(httpParams);

//       return this.http.post('http://localhost:3000/member/addfollowing', 
//       httpParams,
//       {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('token')
//         })
//       }
      
//       );
//     }

//     else if (num > 0) {
//       for (i; i < num; i++) {


//       }
//     }

//   }
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
