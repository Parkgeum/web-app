import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restinfo: restaurant;

  name;
  address;
  telephone;
  business_hours;
  breake_time;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.restInform();
  }

  restInform() {
    var name = localStorage.getItem('resname');

    let httpParams = new HttpParams()
      .append("restID", name)

      console.log(httpParams);

    this.http.post('http://localhost:3000/restaurant', httpParams).subscribe((res: any) => {
      this.restinfo = res.data;
      this.name = this.restinfo.restaurant;
      this.address = this.restinfo.address
      this.telephone = this.restinfo.telephone
      this.business_hours = this.restinfo.business_hours
      this.breake_time = this.restinfo.breake_time;
    });
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
