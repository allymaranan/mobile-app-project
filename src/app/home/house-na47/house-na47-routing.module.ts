import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa47Page } from './house-na47.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa47PageRoutingModule {}
