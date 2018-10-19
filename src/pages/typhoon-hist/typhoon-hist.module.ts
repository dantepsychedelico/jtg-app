import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TyphoonHistPage } from './typhoon-hist';

@NgModule({
  declarations: [
    TyphoonHistPage,
  ],
  imports: [
    IonicPageModule.forChild(TyphoonHistPage),
  ],
})
export class TyphoonHistPageModule {}
