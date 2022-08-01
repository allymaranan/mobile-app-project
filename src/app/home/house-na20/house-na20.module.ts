import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa20PageRoutingModule } from './house-na20-routing.module';

import { HouseNa20Page } from './house-na20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa20PageRoutingModule
  ],
  declarations: [HouseNa20Page]
})
export class HouseNa20PageModule {}
