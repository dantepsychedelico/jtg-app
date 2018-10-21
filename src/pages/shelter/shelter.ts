import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../../app/config';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import { ReportItem } from '../typhoon-info/typhoon-info';

interface ShelterItem { 
  "縣市": string;
  "鄉鎮市區": string;
  "村里": string;
  "避難收容處所地址": string;
  "經度": number; // lon
  "緯度": number; // lat
  "避難收容處所名稱": string;
  "預計收容村里": string;
  "預計收容人數": number;
  "適用災害類別": string;
  "管理人姓名": string;
  "管理人電話": string;
  "室內": string;
  "室外": string;
  "適合避難弱者安置" : string;
  "已收容人數": number
}

/**
 * Generated class for the ShelterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shelter',
  templateUrl: 'shelter.html',
})
export class ShelterPage {

  pos: Geoposition;
  ris: ReportItem[];
  sis: ShelterItem[];
  dangerImg: string = config.url+'/images/rsz_05012bd49e.png';
  shelterImg: string = config.url+'/images/rsz_53316ec59d.png';
  lat: number;
  lon: number;
  zoom: number = 12;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient, private geolocation: Geolocation
  ) {
    this.geolocation.getCurrentPosition()
      .then((pos) => {
        this.pos = pos;
        this.lat = this.pos.coords.latitude;
        this.lon = this.pos.coords.longitude;
      })
      .catch((err) => {
        console.log(err);
      });
    this.getReport();
    this.getShelter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelterPage');
  }

  getReport() {
    return this.http.get(`${config.url}/typhoons/report`)
      .subscribe((data: ReportItem[]) => {
        this.ris = data;
      });
  }

  getShelter() {
    return this.http.get(`${config.url}/typhoons/shelter`)
      .subscribe((data: ShelterItem[]) => {
        this.sis = data;
      });
  }

  center(item: ShelterItem) {
    this.lat = item['緯度'];
    this.lon = item['經度'];
    this.zoom = 18;
  }
}
