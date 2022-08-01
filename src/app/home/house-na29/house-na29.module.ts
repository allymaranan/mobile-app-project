import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa29PageRoutingModule } from './house-na29-routing.module';

import { HouseNa29Page } from './house-na29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa29PageRoutingModule
  ],
  declarations: [HouseNa29Page]
})
export class HouseNa29PageModule {}
