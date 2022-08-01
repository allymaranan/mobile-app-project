import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa43PageRoutingModule } from './house-na43-routing.module';

import { HouseNa43Page } from './house-na43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa43PageRoutingModule
  ],
  declarations: [HouseNa43Page]
})
export class HouseNa43PageModule {}
