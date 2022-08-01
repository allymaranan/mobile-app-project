import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa31PageRoutingModule } from './house-na31-routing.module';

import { HouseNa31Page } from './house-na31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa31PageRoutingModule
  ],
  declarations: [HouseNa31Page]
})
export class HouseNa31PageModule {}
