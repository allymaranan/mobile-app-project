import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa48PageRoutingModule } from './house-na48-routing.module';

import { HouseNa48Page } from './house-na48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa48PageRoutingModule
  ],
  declarations: [HouseNa48Page]
})
export class HouseNa48PageModule {}
