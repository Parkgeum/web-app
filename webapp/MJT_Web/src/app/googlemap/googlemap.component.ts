import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient) { }


  restinfo: restaurant


  ngOnInit() {

  }

  model = {
    restID: ''
  };

  latitude = 37.588787;
  longitude = 127.00432;
  locationChosen = false;

  //googlemap 이벤트
  onChoseLocation(event) {
    // console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    // 이부분 그대로 사용하면 이미지 가져오기 가능 ?
  }

  restInform(restinfo: restaurant) {
    return this.http.post('http://localhost:3000/restaurant', restinfo);
  }


  SearchRestaurant(form: NgForm) {
    this.restInform(form.value).subscribe((res: any) => {
      //response로 받은 것들 information에 저장
      this.restinfo = res.data;

      if (res != null) {
        localStorage.setItem('resname', "test");
        this.router.navigate(['/rt']);

        //조건 다시 수정
        if (this.restinfo.telephone != null) {
          this.router.navigate(['/rt']);
        }
      }
    })
  }
}


interface restaurant {
  restaurant: string;
  image: string;
  address: string[];
  telephone: string;
  business_hours: string;
  breake_time: string;
  likes: string[];
}