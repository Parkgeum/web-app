import { Component, OnInit, Directive, Input } from '@angular/core';
import { User, usermodels } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [ UserService ]
})


export class UserprofileComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) {
     }

     

  
  selectedUser: User;
  user: User[];
  userinfo: any;

  //value를 전달하기 위해 usermodels를 새로 정의하고 refreshUserList에서 사용
  @Input('userinfo') userObj: usermodels;

  readonly baseUrls = 'http://localhost:3000/member/info';

  ngOnInit() {
    this.refreshUserList();
  }


  getUserList() {
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
      console.log(this.userService.user[0].id + this.userService.user.length);
    });
  }

  Searchbtn() {
    this.router.navigateByUrl('/googlemap');
  }

}
