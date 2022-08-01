import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa17PageRoutingModule } from './house-na17-routing.module';

import { HouseNa17Page } from './house-na17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa17PageRoutingModule
  ],
  declarations: [HouseNa17Page]
})
export class HouseNa17PageModule {}
