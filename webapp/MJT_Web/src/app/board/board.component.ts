import { Component, OnInit } from '@angular/core';
import { Upload } from '../shared/upload.model';
import { UploadService } from '../shared/upload.service'
import { HttpClient, HttpHeaders} from '@angular/common/http';
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

  records = [ 
    {
      name: 'aaa',
      online : true
    },
    {
      name: 'aaa',
      online : true
    },
    {
      name: 'aaa',
      online : true
    }
  ]

  selectedPost: Upload;
  public upload: Upload[];
  public uploads : Array<Upload>;

  ngOnInit() {
    this.refreshPostList();
    // this.views();
  }

  getPostList() {
    return this.http.get(this.baseUrls);
  }

  refreshPostList() {
    this.getPostList().subscribe((res) => {

      // 모든 정보들을 받아서 User의 모든 정보를 받아 users에 저장시켜줌
      this.uploadService.upload = res as Upload[];
      var num = "0";
      var i = parseInt(num);
      for (i; i < this.uploadService.upload.length; i++) {
        // if (localStorage.getItem("token") == this.user[i].jsonWebToken) {
        console.log(this.uploadService.upload.length);
        var uid = this.uploadService.upload[i].username;
        var utext = this.uploadService.upload[i].text;
        var uimg = this.uploadService.upload[i].time;
        console.log(uid + utext + uimg);
        // }
      }
    });
  }

  // loadpost() {

  //     return this.http.get('http://localhost:3000/posts/total', {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Authorization': localStorage.getItem('token')
  //       })
  //     });
  // }

  // views() {
  //   this.loadpost().subscribe((res: any)=> {
  //     console.log("test" + JSON.stringify(res));
  //     this.upload = res as Upload[];
  //     this.uploads = Object.values(this.upload);
  //     console.log(Object.values(this.uploads));
  //   })
  // }

}
