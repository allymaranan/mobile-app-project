import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa21PageRoutingModule } from './house-na21-routing.module';

import { HouseNa21Page } from './house-na21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa21PageRoutingModule
  ],
  declarations: [HouseNa21Page]
})
export class HouseNa21PageModule {}
