import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa32PageRoutingModule } from './house-na32-routing.module';

import { HouseNa32Page } from './house-na32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa32PageRoutingModule
  ],
  declarations: [HouseNa32Page]
})
export class HouseNa32PageModule {}
