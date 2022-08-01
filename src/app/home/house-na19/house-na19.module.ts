import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa19PageRoutingModule } from './house-na19-routing.module';

import { HouseNa19Page } from './house-na19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa19PageRoutingModule
  ],
  declarations: [HouseNa19Page]
})
export class HouseNa19PageModule {}
