import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa42PageRoutingModule } from './house-na42-routing.module';

import { HouseNa42Page } from './house-na42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa42PageRoutingModule
  ],
  declarations: [HouseNa42Page]
})
export class HouseNa42PageModule {}
