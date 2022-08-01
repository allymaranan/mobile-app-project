import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa26PageRoutingModule } from './house-na26-routing.module';

import { HouseNa26Page } from './house-na26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa26PageRoutingModule
  ],
  declarations: [HouseNa26Page]
})
export class HouseNa26PageModule {}
