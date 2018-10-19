import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { ItemListPage } from '../pages/item-list/item-list';
import { TyphoonInfoPage } from '../pages/typhoon-info/typhoon-info';
import { TyphoonHistPage } from '../pages/typhoon-hist/typhoon-hist';
import { ShelterPage } from '../pages/shelter/shelter';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: '個人資訊', component: ProfilePage },
      { title: '物品清單', component: ItemListPage },
      { title: '當前', component: TyphoonInfoPage },
      { title: '歷史', component: TyphoonHistPage },
      { title: '避難點', component: ShelterPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
