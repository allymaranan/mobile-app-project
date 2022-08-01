import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa23PageRoutingModule } from './house-na23-routing.module';

import { HouseNa23Page } from './house-na23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa23PageRoutingModule
  ],
  declarations: [HouseNa23Page]
})
export class HouseNa23PageModule {}
