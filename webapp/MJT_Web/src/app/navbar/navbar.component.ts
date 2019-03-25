import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
// import { AuthService } from '../../services/auth.service';
// import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';



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

  public logincheck = false;
 

  ngOnInit() {
    let secondTick = Observable.timer(1000,1000); 
    secondTick.subscribe((tick)=>{ this.checkToken();});
    this.checkToken();
    console.log(this.logincheck);
  }

  

  checkToken() {
    if(localStorage.getItem('token')!=null)
    {
      this.logincheck = true;
    }
  }

  onLogoutClick() {
    localStorage.clear();
    this.logincheck = false;
    this.router.navigate(['/login']);
    // M.toast({ html: 'LogOut Successfully', classes: 'rounded' });
    // console.log(M);
  }

  otherInfo(information: proin) {
    return this.http.post(environment.apiBaseUrl+'/boards/search/user', information);
  }



  Search(form: NgForm) {
    this.otherInfo(form.value).subscribe((res: any) => {
      //response로 받은 것들 information에 저장
      this.information = res;
      console.log(JSON.stringify(this.information))
      localStorage.setItem('userlist', this.information.username);
      if ( localStorage.getItem('userlist') != null) {
        // console.log("bbbbb" + this.information[0].username);
        // console.log(JSON.stringify(this.information));
        localStorage.setItem('userlist', this.information[0].username);
        this.router.navigate(['/userlist'])
      }
      else
      {
        localStorage.setItem('userlist', null);
        this.router.navigate(['/userlist'])
      }
      
    })
  }
  
}

interface Token {
  tok: string;
}

interface proin {
  _id: string;
  id: string;
  SearchUser;
  username: string;
  email: string;
  password: string;
  following: string[];
  follower: string[];
  posts: string[];
  image: string;
  jsonWebToken: string;
}
