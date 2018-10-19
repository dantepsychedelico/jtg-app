import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import _ from 'lodash';

interface People{
  age?: number;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private peopleNum: number;
  private peoples: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  changeNum(peopleNum) {
    if (peopleNum) {
      this.peoples = _.range(peopleNum).map(() => (<People>{}));
    }
  }
  save() {
    this.navCtrl.setRoot(ItemListPage);
  }
}
