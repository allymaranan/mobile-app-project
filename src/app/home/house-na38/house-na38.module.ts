import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa38PageRoutingModule } from './house-na38-routing.module';

import { HouseNa38Page } from './house-na38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa38PageRoutingModule
  ],
  declarations: [HouseNa38Page]
})
export class HouseNa38PageModule {}
