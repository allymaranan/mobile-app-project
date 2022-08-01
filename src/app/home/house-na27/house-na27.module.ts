import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa27PageRoutingModule } from './house-na27-routing.module';

import { HouseNa27Page } from './house-na27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa27PageRoutingModule
  ],
  declarations: [HouseNa27Page]
})
export class HouseNa27PageModule {}
