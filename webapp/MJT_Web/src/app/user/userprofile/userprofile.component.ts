import { Component, OnInit, Directive, Input } from '@angular/core';
import { User, usermodels } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"
import { headersToString } from 'selenium-webdriver/http';
import { environment } from '../../../environments/environment';


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
  username;
  uimage;

  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) {
  }




  public proinfo: pro;
  selectedUser: User;
  post: Post;




  //value를 전달하기 위해 usermodels를 새로 정의하고 refreshUserList에서 사용
  @Input('userinfo') userObj: usermodels;

  ngOnInit() {
    this.startfile();
  }

  startfile() {
    this.profilevalue();
    this.postvalue();
  }

  profilereturn() {
    return this.http.get(environment.apiBaseUrl+'/me', {
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
      localStorage.setItem('pr', this.username);
      console.log("프로필" + this.proinfo.image)
      if(this.proinfo.image == "null")
      this.uimage = 'assets/img/camera.jpg'
      else if(this.proinfo.image != "null")
      {
        this.uimage = this.proinfo.image;
      }
    })
    
    
  }


  postvalue() {
    this.postreturn().subscribe((res: any) => {
      this.post = res.data;
      console.log(JSON.stringify(this.post))
    })
  }

  
  postreturn() {
    let httpParams = new HttpParams()
      .append("username", localStorage.getItem('pr'))
      // console.log(httpParams)
    return this.http.post(environment.apiBaseUrl+'/boards/myposts',httpParams)
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


interface Post {
  username: string;
  image: string;
  text: string;
  time: Date;
  likes: [string];
}
