import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa12PageRoutingModule } from './house-na12-routing.module';

import { HouseNa12Page } from './house-na12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa12PageRoutingModule
  ],
  declarations: [HouseNa12Page]
})
export class HouseNa12PageModule {}
