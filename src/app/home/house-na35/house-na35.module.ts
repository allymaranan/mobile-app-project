import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa35PageRoutingModule } from './house-na35-routing.module';

import { HouseNa35Page } from './house-na35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa35PageRoutingModule
  ],
  declarations: [HouseNa35Page]
})
export class HouseNa35PageModule {}
