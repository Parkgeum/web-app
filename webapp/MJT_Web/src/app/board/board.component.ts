import { Component, OnInit } from '@angular/core';
import { Upload } from '../shared/upload.model';
import { UploadService } from '../shared/upload.service'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    ) { }

  readonly baseUrls = 'http://localhost:3000/boards/follow';

  post: Post;

  ngOnInit() {

    this.refreshPostList();
  }

  getPostList() {
    return this.http.get(this.baseUrls, {
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
  }
}

interface Post {
  username: string;
  image: string;
  text: string;
  time: Date;
  likes: [string];
}
