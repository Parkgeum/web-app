import { ElementRef, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocodeService } from '../shared/geocode.service';
import { NgLocalization } from '@angular/common';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})


export class GooglemapComponent implements OnInit {



  constructor(private router: Router,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    private http: HttpClient) { }


  restinfo: restaurant[]

  
  model = {
    restID: ''
  };

  latitude: number;
  longitude: number;

  name;

  addcheck = false;
  state = false;


  address = '';
  locations: { lat: number, lng: number };
  restlocations: { lat: number, lng: number };
  loading: boolean;

  lat : number;
   37.5536067;
  lng : number;
   126.96961950000002;



  ngOnInit() {
    this.showLocation();
    if (localStorage.getItem('token') == null) {
      console.log("not logined");
      this.router.navigate(['/login']);
    }
    
    // const autocomplete = new google.maps.places.Autocomplete(this.element);
  }




  //googlemap 이벤트
  onChoseLocation(event) {
    // console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }



  // onClickMarker(geo: restaurant) {
  //   this.restinfo = geo;
  //   localStorage.setItem('resname', this.restinfo.restaurant);
  //   this.router.navigate(['/rt']);
  // }

  restInform(restinfo: restaurant) {
    return this.http.post(environment.apiBaseUrl+'/restaurant', restinfo);
  }


  SearchRestaurant(form: NgForm) {
    this.restInform(form.value).subscribe((res: any) => {
      //response로 받은 것들 information에 저장
      this.restinfo = res.data;

      if (res != null) {
        localStorage.setItem('resname', "test");
        this.router.navigate(['/rt']);

        // //조건 다시 수정
        // if (this.restinfo.telephone != null) {
        //   this.router.navigate(['/rt']);
        // }
      }
    })
  }


  showLocation() {
    
    this.addressToCoordinates();


  }

  addressToCoordinates() {

    this.loading = true;

    this.geocodeService.geocodeAddress(this.address)
      .subscribe(


        location => {
          this.locations = location;

          console.log(this.locations.lat + " abc " + this.locations.lng)

          this.loading = false;

          // this.ref.detectChanges();

          this.http.post(environment.apiBaseUrl+'/restaurant/list', this.address).subscribe((res) => {
            this.restinfo = res as restaurant[];

            var num = parseInt('0');
            var lat = 37.5536067;
            var lng = 126.96961950000002
            for (num; num < this.restinfo.length+1; num++) {

              // this.geocodeService.geocodeAddress(this.restinfo[num].address[num])
              // .subscribe(
        
        
              //   restlocation => {
              //     this.restlocations = restlocation;
              //     this.loading = false;

                  if (
                    // this.restinfo[num].restaurant 
                    '서울역' == this.address) {
    
                    // 있으면 addcheck true로 바꿔주고 resname으로 로컬스토리지에 저장
                    //여기에 맛집 이름 줘서 마커에 띄워주기


                    // this.name = this.restinfo[num].restaurant
                    // localStorage.setItem('resname', this.restinfo[num].restaurant)
                    this.name = '서울역';
                    this.state = true;
                    this.addcheck = true;
                    console.log(this.addcheck)
                  }

                  //else if(this.locations.lat == this.restlocations.lat && this.locations.lng == this.restlocations.lng)
                  else if(lat == this.locations.lat && lng == this.locations.lng){
                    
                    // 위도, 경도가 일치하면 restname으로 저장, name 다시 설정
                    // localStorage.setItem('resname', this.restinfo[num].restaurant)
                    // this.name = this.restinfo[num].restaurant

                    this.state = true;
                    this.addcheck = true;
                  }

                  else{
                    this.name='일치하는 맛집이 없습니다.'
                    this.state = false;
                    this.addcheck = true;
                  }
            }
          });
        }
      );


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