import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../../app/config';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';

export interface ReportItem {
  desc: string;
  lat: number;
  lon: number;
  img: string;
  create_ts: Date;
}

interface DbTyphoon {
  name: string;
  area: string;
  wind: number;
  time: string;
  image: string;
  lat: number;
  lon: number;
}

@IonicPage()
@Component({
  selector: 'page-typhoon-info',
  templateUrl: 'typhoon-info.html',
})
export class TyphoonInfoPage {

  typhoon: DbTyphoon;
  lat: number;
  lon: number;
  iconImg: string = config.url+'/images/rsz_17262279e9c.png';
  dangerImg: string = config.url+'/images/rsz_05012bd49e.png';
  zoom: number = 2;
  tempImg: string;
  tempDesc: string;
  pos: Geoposition;
  ris: ReportItem[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HttpClient, private geolocation: Geolocation,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TyphoonInfoPage');
    this.geolocation.getCurrentPosition()
      .then((pos) => {
        this.pos = pos;
      })
      .catch((err) => {
        console.log(err);
      });
    this.http.get(config.url+'/typhoons/real')
      .subscribe((data: DbTyphoon) => {
        this.typhoon = data;
        this.lat = this.typhoon.lat;
        this.lon = this.typhoon.lon;
      });
    this.getReport();
  }
  getReport() {
    return this.http.get(`${config.url}/typhoons/report`)
      .subscribe((data: ReportItem[]) => {
        this.ris = data;
      });
  }
  openCamera() {
    const options: CameraOptions = {
        quality: 25,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options)
      .then((imageData) => { 
        this.tempImg = imageData;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  report() {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(`${config.url}/typhoons/report`, {
      desc: this.tempDesc,
      img: this.tempImg,
      pos: this.pos
    }, httpOptions)
      .subscribe((data) => {
        this.tempImg = null;
        this.tempDesc = null;
        this.getReport();
      });
  }
  center(item: ReportItem) {
    this.lat = item.lat;
    this.lon = item.lon;
    this.zoom = 18;
  }
}
