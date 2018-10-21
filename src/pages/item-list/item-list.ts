import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TyphoonInfoPage } from '../typhoon-info/typhoon-info';
import config from '../../app/config';
import _ from 'lodash';


interface Item{
  name: string;
  checked: boolean;
}

interface DbItem { 
  age: string;
  items: string;
  importance: string;
}

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  public items: Item[] = [];
  public temp: Item = { name: null, checked: false };
  public isRecommend: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HttpClient, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    let hasChildren = localStorage.getItem('hasChildren') === 'true' ? true : false;
    console.log('ionViewDidLoad ItemListPage');
    let preItems = JSON.parse(localStorage.getItem('items') || '[]');
    if (preItems.length) {
      this.items = preItems;
//       this.isRecommend = true;
      return;
    }
    this.http.get(config.url+'/items/default')
      .subscribe((data: DbItem[]) => {
        if (hasChildren) {
          this.items = data.map((d) => {
            return {
              name: d.items,
              checked: false
            };
          });
        } else {
          this.items = _.filter(data, { age: 'all' }).map((d) => {
            return {
              name: d.items,
              checked: false
            };
          });
        }
      });
  }

  insertItem(item) {
    this.items.push(item);
    this.temp = { name: null, checked: false };
  }

  removeItem(item) {
    this.items = _.filter(this.items, (i) => i !== item);
  }

  save() {
    if (this.isRecommend) {
      localStorage.setItem('items', JSON.stringify(this.items));
      this.navCtrl.setRoot(TyphoonInfoPage);
    } else {
      this.http.get(config.url+'/items/recommend', {
        params: {
          items: _.map(this.items, (d) => d.name)
        }
      })
        .subscribe((data: DbItem[]) => {
          this.isRecommend = true;
//           _.forEach(data, (d) => {
//             this.items.push({
//               name: d.items,
//               checked: false
//             });
//           });
          const toast = this.toastCtrl.create({ 
            message: 'Your May need...\n'+ _.map(data, (d) => '- '+d.items).join('\n'), 
            showCloseButton: true, 
            closeButtonText: 'Ok' 
          }); 
          toast.present();
        });
    }
  }
}
