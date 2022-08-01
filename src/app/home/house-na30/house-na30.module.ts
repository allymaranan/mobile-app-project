import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa30PageRoutingModule } from './house-na30-routing.module';

import { HouseNa30Page } from './house-na30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa30PageRoutingModule
  ],
  declarations: [HouseNa30Page]
})
export class HouseNa30PageModule {}
