import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa14PageRoutingModule } from './house-na14-routing.module';

import { HouseNa14Page } from './house-na14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa14PageRoutingModule
  ],
  declarations: [HouseNa14Page]
})
export class HouseNa14PageModule {}
