import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {
  selectedFile:File=null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.http.post('', fd, {
      reportProgress: true,
      observe: 'events'
    })
    // db url 적어주기
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress){
        console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100) + '%')
      } else if (event.type ===HttpEventType.Response) {
      console.log(event);
      }
    })
  }

  // constructor() {}

  constructor(private uploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
  }

}
