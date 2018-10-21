import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { ItemListPage } from '../pages/item-list/item-list';
import { TyphoonInfoPage } from '../pages/typhoon-info/typhoon-info';
import { TyphoonHistPage } from '../pages/typhoon-hist/typhoon-hist';
import { ShelterPage } from '../pages/shelter/shelter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
// import { PhotoLibrary } from '@ionic-native/photo-library';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    ItemListPage,
    TyphoonInfoPage,
    TyphoonHistPage,
    ShelterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyA-q521HE6354dNjvRgqjBR_DjtwJm7rOE'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    ItemListPage,
    TyphoonInfoPage,
    TyphoonHistPage,
    ShelterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera
//     PhotoLibrary
  ]
})
export class AppModule {}
