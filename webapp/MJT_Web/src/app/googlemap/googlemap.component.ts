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

  lat: number;
  lng: number;
  cnt;




  ngOnInit() {
    this.cnt=parseInt('0')
    this.showLocation();
    if (localStorage.getItem('token') == null) {
      console.log("not logined");
      this.router.navigate(['/login']);
    }
  }




  restInform(restinfo: restaurant) {
    return this.http.post(environment.apiBaseUrl + '/restaurant', restinfo);
  }


  SearchRestaurant(form: NgForm) {
    this.restInform(form.value).subscribe((res: any) => {

      this.restinfo = res.data;

      if (res != null) {
        localStorage.setItem('resname', "test");
        this.router.navigate(['/rt']);
      }
    })
  }


  showLocation() {
  

    this.addressToCoordinates();


  }

  addressToCoordinates() {


    this.loading = true;

    this.http.post(environment.apiBaseUrl + '/restaurant/list', this.address).subscribe((res) => {
      this.restinfo = res as restaurant[];
      this.cnt++;
      

      var num = parseInt('0');
      var add;

      for (num = parseInt('0'); num < this.restinfo.length; num++) {

        console.log("log1    num is " + num + " resadd " + this.restinfo[num].address + " resname" + this.restinfo[num].restaurant + " add " + add);
        if (this.restinfo[num].restaurant == this.address) {


          this.name = this.restinfo[num].restaurant;
          localStorage.setItem('resname', this.restinfo[num].restaurant)

          console.log("찾았다");
          

          this.name = this.restinfo[num].restaurant;
          this.restinfo[num].address;
          add = this.restinfo[num].address
          localStorage.setItem('resadd', add);
          this.state = true;
          this.addcheck = true;
          console.log(this.name +" 뒤에는 주소" + add);
          break;


        }

        else {
          this.name = '일치하는 맛집이 없습니다.'
          this.state = false;
          this.addcheck = true;
        }

      }
    });

    console.log(this.cnt)
    if(this.cnt == parseInt('0')){
    this.locations.lat = 37.5817849
    this.locations.lng = 127.01036899999997
  }
    else {

    var resadd = localStorage.getItem('resadd')

    this.geocodeService.geocodeAddress(resadd)
      .subscribe(


        locations => {
          this.locations = locations;
          this.loading = false;
          console.log(this.locations.lat +"aaa" + this.locations.lng)
          this.locations.lat = locations.lat;
          this.locations.lng = locations.lng;
          localStorage.setItem('lat', this.locations.lat.toString())
          localStorage.setItem('lng', this.locations.lng.toString())

        }
      );


  }
}

                // this.geocodeService.geocodeAddress(add)
              //   .subscribe(

              //     restlocations => {
              //       this.restlocations = restlocations;
              //       this.loading = false;
              //       console.log("log2    num is " +num + " resadd "+ this.restinfo[num].address + " resname" + this.restinfo[num].restaurant + " add " + add);

              //       if (this.restinfo[num].restaurant == this.address) {

              //         // 있으면 addcheck true로 바꿔주고 resname으로 로컬스토리지에 저장
              //         //여기에 맛집 이름 줘서 마커에 띄워주기

              //         this.name = this.restinfo[num].restaurant;
              //         localStorage.setItem('resname', this.restinfo[num].restaurant)
              //         this.locations.lat = this.restlocations.lat;
              //         console.log("aaa" + this.locations.lat);
              //         this.locations.lng = this.restlocations.lng;
              //         console.log("bbb" + this.locations.lng);
              //         this.state = true;
              //         this.addcheck = true;
              //       }

              //       else {
              //         this.name = '일치하는 맛집이 없습니다.'
              //         this.state = false;
              //         this.addcheck = true;
              //       }
              //     })







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
