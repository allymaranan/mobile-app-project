import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa33PageRoutingModule } from './house-na33-routing.module';

import { HouseNa33Page } from './house-na33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa33PageRoutingModule
  ],
  declarations: [HouseNa33Page]
})
export class HouseNa33PageModule {}
