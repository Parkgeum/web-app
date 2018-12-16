
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

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
    followuser: localStorage.getItem('userlist'),
    // state: localStorage.getItem('state')
    state:''
  }




  ngOnInit() {
    this.postvalue();
    let secondTick = Observable.timer(1000,1000); 
    secondTick.subscribe((tick)=>{
      this.otherInfo()
    });
    // this.otherInfo();
  }


  otherInfo() {
    let httpParams = new HttpParams()
      .append("id", localStorage.getItem('users'))

    // console.log(httpParams);

    this.http.post(environment.apiBaseUrl + '/member/userbyid', httpParams).subscribe((res: any) => {
      this.information = res.data;
      this.follower = this.information.follower.length;
      this.followings = this.information.following.length;
      this.posts = this.information.posts.length;
      this.id = this.information.id;
      this.username = this.information.username;
      if(this.information.image == "null")
      this.uimage = 'assets/img/camera.jpg'
      else if(this.information.image != "null")
      {
        this.uimage = this.information.image;
      }
      this.uimage = this.information.image;
      // console.log(this.information);

      // this.postvalue();
      
      this.clickfollowing();
    });
  }


  postreturn() {
    let httpParam = new HttpParams()
      .append("username", localStorage.getItem('userlist'))
    // console.log(httpParams)
    return this.http.post(environment.apiBaseUrl + '/boards/myposts', httpParam)
  }

  postvalue() {
    this.postreturn().subscribe((res: any) => {
      this.post = res.data;
      console.log(JSON.stringify(this.post))
    })
  }




  ///////////////////////////////////////////////////////////




  postUser(test: fu) {
    console.log(localStorage.getItem('token'));
    return this.http.post(environment.apiBaseUrl + '/member/addfollowing',
      test,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      }

    );

  }


  check(form: NgForm) {
    this.postUser(form.value).subscribe((res) => {
    });
    // console.log(form.value);
  }





    clickfollowing() {
      var num = this.information.follower.length;
      // console.log(num);
      let httpParams = new HttpParams()
      .append("id", localStorage.getItem('users'))
      this.http.post(environment.apiBaseUrl + '/member/userbyid', httpParams).subscribe((res: any) => {
        this.information = res.data;
    


      var i = parseInt('0');
      if (num == i) {
        localStorage.setItem('state', 'On');
        this.model.state='On';
        // console.log("test1")
      }

      else if (num > i) {

        for (i; i < num; i++) {

          if( this.information.follower[i] == localStorage.getItem('pr'))
          {
            localStorage.setItem('state', 'Off');
            this.model.state='Off';
            // console.log(localStorage.getItem('state')+ "abcd"+ this.information.follower[i])
          }
          else
          {
            // console.log("test3")
            localStorage.setItem('state', 'On');
            this.model.state='On';
          }
        }
      }
    })
    // console.log("state"+localStorage.getItem('state'))
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


