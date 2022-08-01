import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa36PageRoutingModule } from './house-na36-routing.module';

import { HouseNa36Page } from './house-na36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa36PageRoutingModule
  ],
  declarations: [HouseNa36Page]
})
export class HouseNa36PageModule {}
