import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss']
})
export class Tab1Page {
  
  constructor(private geolocation: Geolocation) {}

  getGeos(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      let location: string;
      location = "위도: " + resp.coords.latitude.toString() + " 경도: "
        + resp.coords.longitude.toString();
      alert(location);
      //alert(resp.coords.altitude.toString());
    })
    .catch(e =>{
      alert(e);
    });
  }

}
