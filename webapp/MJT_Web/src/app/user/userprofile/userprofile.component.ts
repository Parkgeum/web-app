import { Component, OnInit, Directive, Input } from '@angular/core';
import { User, usermodels } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"
import { headersToString } from 'selenium-webdriver/http';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserService]
})


export class UserprofileComponent implements OnInit {

  id;
  posts
  follower;
  following;
  username

  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) {
  }




  public proinfo: pro;
  selectedUser: User;




  //value를 전달하기 위해 usermodels를 새로 정의하고 refreshUserList에서 사용
  @Input('userinfo') userObj: usermodels;

  readonly baseUrls = 'http://localhost:3000/member/info';

  ngOnInit() {

    this.profilevalue();
  }

  profilereturn() {
    return this.http.get('http://localhost:3000/me', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }

  profilevalue() {
    if (localStorage.getItem('token') == null) {
      console.log("not logined");
      this.router.navigate(['/login']);
    }
    this.profilereturn().subscribe((res: any) => {
      this.proinfo = res.data;
      // console.log(JSON.stringify(this.proinfo));
      this.id = this.proinfo.id;
      this.posts = this.proinfo.posts.length;
      this.follower = this.proinfo.follower.length;
      this.following = this.proinfo.following.length;
      this.username = this.proinfo.username;
    })

  }

  profile1() {
    // var check = localStorage.getItem('profile')
    // // console.log( this.baseUrls + "/pro" + `/${check}`);
    // this.http.get(this.baseUrls + "/pro" + `/${check}`).subscribe((res: any) => {
    //   // console.log( JSON.stringify(res));
    //   this.proinfo = res;
    //   this.follower = this.proinfo.follower.length;
    //   this.following = this.proinfo.following.length;
    //   this.posts = this.proinfo.posts.length;
    //   this.id = this.proinfo.id;
    //   this.username = this.proinfo.username;
    //   this.tok = this.proinfo.jsonWebToken;


    // })
  }



  editprofile() {
    if (localStorage.getItem('token') == this.proinfo.jsonWebToken) {
      this.router.navigate(['/change'])
    }
  }


}


interface pro {
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
