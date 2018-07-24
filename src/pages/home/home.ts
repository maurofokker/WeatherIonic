import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[];

  constructor(public navCtrl: NavController
    , public http: Http) {

      this.getData();

  }

  getData() {
    // subscribe function register the handler or callback functions which will be executed
    // when http request either succeeds or fails
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((data) => {
      console.log(data.json());
      this.users = data.json();
    }, (error) => {
      console.log(error);
    });
  }

}
