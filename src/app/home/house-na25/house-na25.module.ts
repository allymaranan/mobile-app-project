import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa25PageRoutingModule } from './house-na25-routing.module';

import { HouseNa25Page } from './house-na25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa25PageRoutingModule
  ],
  declarations: [HouseNa25Page]
})
export class HouseNa25PageModule {}
