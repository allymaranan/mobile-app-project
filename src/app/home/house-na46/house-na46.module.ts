import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa46PageRoutingModule } from './house-na46-routing.module';

import { HouseNa46Page } from './house-na46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa46PageRoutingModule
  ],
  declarations: [HouseNa46Page]
})
export class HouseNa46PageModule {}
