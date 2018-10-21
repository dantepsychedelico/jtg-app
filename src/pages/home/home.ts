import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import config from '../../app/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public homeImgUrl: string = config.url+'/images/44576979.png';
  constructor(public navCtrl: NavController) {
  }

}
