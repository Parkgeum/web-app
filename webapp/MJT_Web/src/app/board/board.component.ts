import { Component, OnInit } from '@angular/core';
import { Upload } from '../shared/upload.model';
import { UploadService } from '../shared/upload.service'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"
import { environment } from '../../environments/environment';
import { reduce } from 'rxjs-compat/operator/reduce';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    ) {}

  post: Post;
  checkpost = false;

  ngOnInit() {
    this.refreshPostList();
  }

  getPostList() {
    return this.http.get(environment.apiBaseUrl+'/boards/follow', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }


  refreshPostList() {
    this.getPostList().subscribe((res: any) => {
      this.post = res.data;

    });
    if (localStorage.getItem('token') == null) {
      console.log("not logined");
      this.router.navigate(['/login']);
    }
  }
}

interface Post {
  username: string;
  image: string;
  text: string;
  time: Date;
  likes: [string];
}
