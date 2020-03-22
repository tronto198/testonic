import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss']
})
export class Tab1Page {
  public location: string;
  constructor(private geolocation: Geolocation) {}

  getGeos(){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp)=>{
      this.location = "위도: " + resp.coords.latitude.toString() + "\n 경도: "
        + resp.coords.longitude.toString();
        
    })
    .catch(e =>{
      alert(e);
    });
  }

}
