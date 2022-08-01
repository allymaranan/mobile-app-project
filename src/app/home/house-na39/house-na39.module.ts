import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa39PageRoutingModule } from './house-na39-routing.module';

import { HouseNa39Page } from './house-na39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa39PageRoutingModule
  ],
  declarations: [HouseNa39Page]
})
export class HouseNa39PageModule {}
