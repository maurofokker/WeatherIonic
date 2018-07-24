import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherInfo: any = {};
  cityName: string = "Santiago";
  apiKey: string = "ENTER_API_KEY_HERE";
  mapLocation: string = "";

  constructor(public navCtrl: NavController
    , public http: Http
    , public loadingController: LoadingController) {

      this.getData();

  }

  getData() {
    let loading = this.loadingController.create();
    loading.present();
    // subscribe function register the handler or callback functions which will be executed
    // when http request either succeeds or fails
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&appid=" + this.apiKey).subscribe((data) => {
      console.log(data.json());
      this.weatherInfo = data.json();
      this.mapLocation = "https://maps.googleapis.com/maps/api/staticmap?center="+this.cityName+"&size=600x300";
      loading.dismiss();
    }, (error) => {
      console.log(error);
      loading.dismiss();
    });
  }

}
