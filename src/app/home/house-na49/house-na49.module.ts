import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa49PageRoutingModule } from './house-na49-routing.module';

import { HouseNa49Page } from './house-na49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa49PageRoutingModule
  ],
  declarations: [HouseNa49Page]
})
export class HouseNa49PageModule {}
