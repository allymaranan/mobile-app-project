import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa13PageRoutingModule } from './house-na13-routing.module';

import { HouseNa13Page } from './house-na13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa13PageRoutingModule
  ],
  declarations: [HouseNa13Page]
})
export class HouseNa13PageModule {}
