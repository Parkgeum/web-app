import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadService]
})
export class UploadComponent implements OnInit {

  latitude = 37.588787;
  longitude = 127.00432;
  locationChosen = false;

  //googlemap 이벤트
  onChoseLocation(event){
    // console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen=  true;
    // 이부분 그대로 사용하면 이미지 가져오기 가능 ?
  }

  selectedFile : File = null;
  imageUrl : string = "assets/img/logom.png"
  fileToUpload : File = null;

  //이미지 미리 보기를 위해
  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);

    // show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(this.fileToUpload)
  }

  //파일 선택시 이벤트
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    // this.imgurl = event.target.value;
  }

  //reset 이벤트
  reset(form?: NgForm) {
    if(form)
      form.reset();
    this.uploadService.selectedUpload = {
        _id: "",
      text: "",
      image: "",
      hashtag: "",
    }
  }

  //upload.service에서 설정한 주소로 파라메터 전달?
  onUpload(form?: NgForm) {
    this.uploadService.postUpload(form.value).subscribe(res=> {
      this.reset(form);
      console.log("test upload");
      M.toast({ html: 'Upload successfully', classes: 'rounded'})
    });
  }


    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);

    // this.http.post('', fd, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    
    // // db url 적어주기
    // .subscribe(event => {
    //   if (event.type === HttpEventType.UploadProgress){
    //     console.log('Upload Progress: '+ Math.round(event.loaded / event.total * 100) + '%')
    //   } else if (event.type ===HttpEventType.Response) {
    //   console.log(event);
    //   }
    // })
  

  // constructor() {}

  constructor(private uploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
    this.reset();
  }

}
