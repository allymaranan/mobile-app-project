import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa11PageRoutingModule } from './house-na11-routing.module';

import { HouseNa11Page } from './house-na11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa11PageRoutingModule
  ],
  declarations: [HouseNa11Page]
})
export class HouseNa11PageModule {}
