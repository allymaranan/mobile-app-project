import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa18PageRoutingModule } from './house-na18-routing.module';

import { HouseNa18Page } from './house-na18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa18PageRoutingModule
  ],
  declarations: [HouseNa18Page]
})
export class HouseNa18PageModule {}
