import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa30Page } from './house-na30.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa30PageRoutingModule {}
