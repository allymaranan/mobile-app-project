import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa47PageRoutingModule } from './house-na47-routing.module';

import { HouseNa47Page } from './house-na47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa47PageRoutingModule
  ],
  declarations: [HouseNa47Page]
})
export class HouseNa47PageModule {}
