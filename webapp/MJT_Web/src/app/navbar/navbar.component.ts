import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
// import { AuthService } from '../../services/auth.service';
// import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {

  constructor(
    // private authService: AuthService,
    private router: Router,
    private userserivce: UserService,
    private http: HttpClient) { }

  model = {
    SearchUser: ''
  };


  public token: Token[];
  information: proin;

  ngOnInit() {
    // this.token[0].tok = localStorage.getItem('token');
    // console.log("aaaa" + this.token[0].tok);
  }

  onLogoutClick() {
    -
    localStorage.setItem('token', null);
    localStorage.setItem('profile', null);
    this.router.navigate(['/login']);
  }

  otherInfo(information: proin) {
    return this.http.post('http://localhost:3000/boards/search/user', information);
  }



  Search(form: NgForm) {
    this.otherInfo(form.value).subscribe((res: any) => {
      //response로 받은 것들 information에 저장
      this.information = res;
      if (res != null) {
        console.log("bbbbb" + this.information[0].username);
        this.router.navigate(['/profile'])
      }
    })

    // )
    // this.http.post('http://localhost:3000/boards/search/user', form.value).subscribe((res: any) => {
    //   this.information = res;
    // })
  }

}

interface Token {
  tok: string;

}

interface proin {
  _id: string;
  id: string;
  SearchUser
  username: string;
  email: string;
  password: string;
  following: string[];
  follower: string[];
  posts: string[];
  image: string;
  jsonWebToken: string;
}
