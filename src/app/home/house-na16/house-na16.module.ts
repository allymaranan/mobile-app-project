import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa16PageRoutingModule } from './house-na16-routing.module';

import { HouseNa16Page } from './house-na16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa16PageRoutingModule
  ],
  declarations: [HouseNa16Page]
})
export class HouseNa16PageModule {}
