import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa45PageRoutingModule } from './house-na45-routing.module';

import { HouseNa45Page } from './house-na45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa45PageRoutingModule
  ],
  declarations: [HouseNa45Page]
})
export class HouseNa45PageModule {}
