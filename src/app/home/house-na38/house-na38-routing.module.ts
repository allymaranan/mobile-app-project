import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa38Page } from './house-na38.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa38PageRoutingModule {}
