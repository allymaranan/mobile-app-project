import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa40PageRoutingModule } from './house-na40-routing.module';

import { HouseNa40Page } from './house-na40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa40PageRoutingModule
  ],
  declarations: [HouseNa40Page]
})
export class HouseNa40PageModule {}
