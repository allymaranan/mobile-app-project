import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa28PageRoutingModule } from './house-na28-routing.module';

import { HouseNa28Page } from './house-na28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa28PageRoutingModule
  ],
  declarations: [HouseNa28Page]
})
export class HouseNa28PageModule {}
