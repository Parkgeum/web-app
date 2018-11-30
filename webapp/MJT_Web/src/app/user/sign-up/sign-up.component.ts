import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ UserService ]
})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //sign-up.html과 매칭
  showSucessMessage : boolean;
  serverErrorMessages : string;

  constructor(private userService: UserService,
    private _router : Router,
    private _route : ActivatedRoute) { }

  ngOnInit() {
    
  }


  onSubmit(form : NgForm) {
    //user.service.ts와 매칭
    console.log(form+"test");
    this.userService.postUser(form.value).subscribe(
      // success or error function
      res => {
        this.showSucessMessage = true;
        // 메세지 노출 시간
        setTimeout(() => this.showSucessMessage = false, 3000);
        this.resetForm(form);
      }, 
      
      err => {
        if (err.status == 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong. Please contact admin';
      }
    );
    
  }

  //성공적으로 전달이 완료 될 경우
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      id: '',
      username: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
    this._router.navigate(['/login'])
  }




}
