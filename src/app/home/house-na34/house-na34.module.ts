import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa34PageRoutingModule } from './house-na34-routing.module';

import { HouseNa34Page } from './house-na34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa34PageRoutingModule
  ],
  declarations: [HouseNa34Page]
})
export class HouseNa34PageModule {}
