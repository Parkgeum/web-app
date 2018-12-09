import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.css'],
  providers: [UserService]
})
export class ChangeprofileComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) { }

    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  model = {
    id: '',
    pre_password: '',
    new_password: ''
  };

  model_ = {
    id: '',
    username: '',
    email: ''
  };

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    //user.service.ts와 매칭
    this.userService.changepass(form.value).subscribe(
      // success or error function

      res => {
        this.showSucessMessage = true;
        // 메세지 노출 시간

        console.log("Change is  Success");
        setTimeout(() => this.showSucessMessage = false, 3000);
        this.resetForm(form);

      },

      err => {
        if (err.status == 422) {
          this.serverErrorMessages = err.error.join('<br/>');

          console.log(form.value.pre_password);
          console.log(form.value.new_password);
        }
        else
          this.serverErrorMessages = 'Something went wrong. Please contact admin';
        console.log(form.value.pre_password);
        console.log(form.value.new_password);
      }
    );
  }

  onInSubmit(form: NgForm) {
    //user.service.ts와 매칭
    this.userService.changeInfo(form.value).subscribe(
      // success or error function

      res => {
        this.showSucessMessage = true;
        // 메세지 노출 시간

        console.log("Change is  Success");
        setTimeout(() => this.showSucessMessage = false, 3000);
        this.resetForm(form);

      },

      err => {
        if (err.status == 422) {
          this.serverErrorMessages = err.error.join('<br/>');

          console.log(form.value.pre_password);
          console.log(form.value.new_password);
        }
        else
          this.serverErrorMessages = 'Something went wrong. Please contact admin';
        console.log(form.value.pre_password);
        console.log(form.value.new_password);
      }
    );
  }

  

  //성공적으로 전달이 완료 될 경우
  resetForm(form: NgForm) {
    // this.model ={

    // };
    form.resetForm();
    this.serverErrorMessages = '';
    this._router.navigate(['/profile'])
  }


  // postUpload(uld: Upload) {
  //   return this.http.post(this.baseURL, uld, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': localStorage.getItem('token')
  //     })
  //   });
  // }

  // btnclick() {
  //   this._router.navigate(['/upload']);
  // }

}
