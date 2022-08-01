import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNa50PageRoutingModule } from './house-na50-routing.module';

import { HouseNa50Page } from './house-na50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNa50PageRoutingModule
  ],
  declarations: [HouseNa50Page]
})
export class HouseNa50PageModule {}
