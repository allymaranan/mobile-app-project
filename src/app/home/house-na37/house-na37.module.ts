import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa37PageRoutingModule } from './house-na37-routing.module';

import { HouseNa37Page } from './house-na37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa37PageRoutingModule
  ],
  declarations: [HouseNa37Page]
})
export class HouseNa37PageModule {}
