import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TyphoonInfoPage } from './typhoon-info';

@NgModule({
  declarations: [
    TyphoonInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TyphoonInfoPage),
  ],
})
export class TyphoonInfoPageModule {}
