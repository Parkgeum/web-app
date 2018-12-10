import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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



  public proinfo: pro[];
  selectedUser: User;
  user: User[];
  userinfo: any;

  //value를 전달하기 위해 usermodels를 새로 정의하고 refreshUserList에서 사용



  ngOnInit() {
    //시작하면 returnother 들어갈 부분 넣어주기
    // this.returnother(form);
  }


  // 다른 유저 정보 받아오는 부분 추후 수정
  returnother(form: NgForm) {
    this.userService.otherInfo(form.value).subscribe((res: any) => {
      console.log(JSON.stringify(res));
      this.proinfo = [res];
    });
}

// readonly baseUrls = 'http://localhost:3000/member/info';

//   profile1() {
//     var check = localStorage.getItem('profile')
//     console.log(this.baseUrls + "/pro" + `/${check}`);
//     this.http.get(this.baseUrls + "/pro" + `/${check}`).subscribe((res: any) => {
//       console.log(JSON.stringify(res));
//       this.proinfo = [res];
//     })
//   }


  Clickfollower() {

  }

  Clickfollowing() {

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
