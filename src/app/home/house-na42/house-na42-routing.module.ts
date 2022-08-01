import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa42Page } from './house-na42.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa42PageRoutingModule {}
