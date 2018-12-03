import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

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

  Searchbtn(){
    this.router.navigateByUrl('/googlemap');
  }
  
}
