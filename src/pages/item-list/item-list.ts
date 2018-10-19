import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TyphoonInfoPage } from '../typhoon-info/typhoon-info';
import _ from 'lodash';

interface Item{
  name: string;
  checked: boolean;
}

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  public items: Item[] = [];
  public temp: Item = { name: null, checked: false };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

  insertItem(item) {
    this.items.push(item);
    this.temp = { name: null, checked: false };
  }

  removeItem(item) {
    this.items = _.filter(this.items, (i) => i !== item);
  }

  save() {
    this.navCtrl.setRoot(TyphoonInfoPage);
  }
}
