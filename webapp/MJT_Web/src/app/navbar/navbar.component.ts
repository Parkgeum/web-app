import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    // private authService: AuthService,
    private router: Router,
    // private flashMessage: NgFlashMessageService
    ) { }

   
  public token : Token[];

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

  Searchbtn() {
    this.router.navigateByUrl('/googlemap');
  }

}

interface Token {
  tok: string;
}
