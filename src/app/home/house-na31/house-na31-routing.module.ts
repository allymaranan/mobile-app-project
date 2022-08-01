import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa31Page } from './house-na31.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa31PageRoutingModule {}
