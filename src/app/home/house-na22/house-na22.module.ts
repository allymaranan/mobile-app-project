import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa22PageRoutingModule } from './house-na22-routing.module';

import { HouseNa22Page } from './house-na22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa22PageRoutingModule
  ],
  declarations: [HouseNa22Page]
})
export class HouseNa22PageModule {}
