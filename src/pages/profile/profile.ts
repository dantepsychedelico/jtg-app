import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import _ from 'lodash';

interface People{
  age?: string;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private peopleNum: number;
  private peoples: People[];
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
    localStorage.setItem('hasChildren', _.find(this.peoples, { age: '1' })? 'true' : 'false')
    this.navCtrl.setRoot(ItemListPage);
  }
}
