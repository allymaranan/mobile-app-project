import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa44PageRoutingModule } from './house-na44-routing.module';

import { HouseNa44Page } from './house-na44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa44PageRoutingModule
  ],
  declarations: [HouseNa44Page]
})
export class HouseNa44PageModule {}
