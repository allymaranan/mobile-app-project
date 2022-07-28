import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeOwnerPageRoutingModule } from './home-owner-routing.module';

import { HomeOwnerPage } from './home-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeOwnerPageRoutingModule
  ],
  declarations: [HomeOwnerPage]
})
export class HomeOwnerPageModule {}
