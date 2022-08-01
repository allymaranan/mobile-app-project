import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa15PageRoutingModule } from './house-na15-routing.module';

import { HouseNa15Page } from './house-na15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa15PageRoutingModule
  ],
  declarations: [HouseNa15Page]
})
export class HouseNa15PageModule {}
