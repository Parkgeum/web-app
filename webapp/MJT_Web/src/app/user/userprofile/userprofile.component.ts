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



  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) {
  }




  public proinfo: pro[];
  selectedUser: User;
  user: User[];
  userinfo: any;


  //value를 전달하기 위해 usermodels를 새로 정의하고 refreshUserList에서 사용
  @Input('userinfo') userObj: usermodels;

  readonly baseUrls = 'http://localhost:3000/member/info';

  ngOnInit() {
    //this.refreshUserList();
    this.profile1();
  }


  /*   getUserList() {
      return this.http.get(this.baseUrls);
    }
  
    refreshUserList() {
      this.getUserList().subscribe((res) => {
        // this.user = res as User[];
        // var num = "0";
        // var i = parseInt(num);
        // for (i; i < this.user.length; i++) {
        //   if (localStorage.getItem("token") == this.user[i].jsonWebToken) {
            
        //     var uname = this.user[i].id;
        //     var ufollower = this.user[i].follower.length;
        //     var ufollowing = this.user[i].following.length;
        //     var uposts= this.user[i].posts.length;
        //     console.log(uname + ufollower + ufollowing + uposts)
        //   }
        // }
  
        //모든 정보들을 받아서 users에 저장시켜줌
        this.userService.user = res as User[];
        console.log("aaaaaaa"+this.userService.user[0].id + this.userService.user.length);
      });
    } */

  Searchbtn() {
    this.router.navigateByUrl('/googlemap');
  }

  profilereturn() {
    return this.http.get('http://localhost:3000/me', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }

  // profile() {
  //   this.profilereturn().subscribe((res)=> {
  //     console.log("test" + JSON.stringify(res));
  //     this.proinfo = [res];
      // console.log("tqtqtqtqtqqt:"+ this.proinfo[0].posts.length);
  //   })
  // }

  profile1() {
    var check = localStorage.getItem('profile')
    console.log( this.baseUrls + "/pro" + `/${check}`);
    this.http.get(this.baseUrls + "/pro" + `/${check}`).subscribe((res: any) => {
      console.log( JSON.stringify(res));
      this.proinfo = [res];
    })


    // this.profilereturn().subscribe((res: any) => {
    //   console.log('gkgkgkgkgkgk' + JSON.stringify(res));
    //   this.proinfo = res as pro[];
    //   console.log("tqtqtqtqtqqt:"+this.proinfo[0].posts);
    // })
  }

  Clickfollower() {
    
  }

  Clickfollowing() {

  }

  editprofile() {
    if(localStorage.getItem('token')!=this.proinfo[0].jsonWebToken)
    {
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


export interface message{
  message: message[];
}