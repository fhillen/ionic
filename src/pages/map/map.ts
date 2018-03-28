import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import L from "leaflet"

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: L.Map;
  center: L.PointTuple;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.center = [52.3760364,9.7692124];
    this.initMap();
  }

  initMap(){
    this.map = L.map('map', {
      center: this.center,
      zoom: 16
    });

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'copyrights hier 123 - test von FH © IP SYSCON'
    }).addTo(this.map);
  }
}
