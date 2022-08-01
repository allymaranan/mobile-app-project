import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa41PageRoutingModule } from './house-na41-routing.module';

import { HouseNa41Page } from './house-na41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa41PageRoutingModule
  ],
  declarations: [HouseNa41Page]
})
export class HouseNa41PageModule {}
