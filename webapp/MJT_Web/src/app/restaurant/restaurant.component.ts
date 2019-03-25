import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restinfo: restaurant;

  image;
  name;
  address;
  telephone;
  business_hours;
  breake_time;

  locations: { lats: number, lngs: number };



  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.restInform();
  }

  restInform() {

    var name = localStorage.getItem('resname');

    let httpParams = new HttpParams()
      .append("restaurant", name)

      // console.log(JSON.stringify(httpParams))

    this.http.post(environment.apiBaseUrl+'/restaurant', httpParams).subscribe((res: any) => {
      this.restinfo = res.data;
      // console.log(this.restinfo)
      this.image = this.restinfo.image;
      this.name = this.restinfo.restaurant;
      this.address = this.restinfo.address
      this.telephone = this.restinfo.telephone
      this.business_hours = this.restinfo.business_hours
      this.breake_time = this.restinfo.breake_time;
 
      
    });
    this.locations.lats = parseFloat(localStorage.getItem('lat'));
    this.locations.lngs = parseFloat(localStorage.getItem('lng'));
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
