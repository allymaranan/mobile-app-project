import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa24PageRoutingModule } from './house-na24-routing.module';

import { HouseNa24Page } from './house-na24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa24PageRoutingModule
  ],
  declarations: [HouseNa24Page]
})
export class HouseNa24PageModule {}
