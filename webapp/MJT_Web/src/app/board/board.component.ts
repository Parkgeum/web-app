import { Component, OnInit } from '@angular/core';
import { Upload } from '../shared/upload.model';
import { UploadService } from '../shared/upload.service'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [UploadService]
})
export class BoardComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private uploadService: UploadService) { }

  readonly baseUrls = 'http://localhost:3000/posts/info';

  selectedPost: Upload;
  upload: Upload[];

  ngOnInit() {
    this.refreshPostList();
  }

  getPostList() {
    return this.http.get(this.baseUrls);
  }

  refreshPostList() {
    this.getPostList().subscribe((res) => {

      //모든 정보들을 받아서 User의 모든 정보를 받아 users에 저장시켜줌
      this.uploadService.upload = res as Upload[];
      var num = "0";
      var i = parseInt(num);
      for (i; i < this.uploadService.upload.length; i++) {
        // if (localStorage.getItem("token") == this.user[i].jsonWebToken) {
        console.log(this.uploadService.upload.length);
        var uid = this.uploadService.upload[i].username;
        var utext = this.uploadService.upload[i].text;
        var uimg = this.uploadService.upload[i].image;
        var uhashtag = this.uploadService.upload[i].hashtag;
        console.log(uid + utext + uimg + uhashtag);
        // }
      }
    });
  }

}
