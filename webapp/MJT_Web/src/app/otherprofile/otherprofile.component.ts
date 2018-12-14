import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';



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
  test: fu;
  post: Post;
  posts;
  follower;
  followings;
  username;
  uimage;
  id;

  model = {
    followuser : '',
    state : ''
  }

  
  ngOnInit() {
    let secondTick = Observable.timer(1000,1000); 
    secondTick.subscribe((tick)=>{this.otherInfo()});
  }


  otherInfo() {
    let httpParams = new HttpParams()
      .append("id", localStorage.getItem('users'))

    // console.log(httpParams);

    this.http.post(environment.apiBaseUrl+'/member/userbyid', httpParams).subscribe((res: any) => {
      this.information = res.data;
      this.follower = this.information.follower.length;
      this.followings = this.information.following.length;
      this.posts = this.information.posts.length;
      this.id = this.information.id;
      this.username = this.information.username;
      this.uimage = this.information.image;
      // console.log(this.information);

      this.postvalue();
    });
  }

  postreturn() {
    let httpParams = new HttpParams()
      .append("username", localStorage.getItem('username'))
      console.log(httpParams)
    return this.http.post(environment.apiBaseUrl+'/boards/myposts',httpParams)
  }

  postvalue() {
    this.postreturn().subscribe((res: any) => {
      this.post = res.data;
      console.log(JSON.stringify(this.post))
    })
  }




///////////////////////////////////////////////////////////






  userfollowing() {

    let httpP = new HttpParams()
      .append("followuser", localStorage.getItem('username'))
      .append("state", "On");

    // console.log(JSON.stringify(httpP))

    console.log(
      JSON.stringify(
        this.http.post(environment.apiBaseUrl+'/member/addfollowing',
        httpP,  
        {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            })
          })
      ))
  }


  postUser(test: fu){
    return this.http.post(environment.apiBaseUrl+'/member/addfollowing', 
    test,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    );
  }


  check(form: NgForm){
    // form.value.follower=localStorage.getItem('username');
    // form.value.state = localStorage.getItem('state');
    this.postUser(form.value).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    console.log("testpaging");
    
    
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

interface fu {
  followuser: string;
  state: string;
}

interface Post {
  username: string;
  image: string;
  text: string;
  time: Date;
  likes: [string];
}


