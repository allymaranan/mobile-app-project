import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa41Page } from './house-na41.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa41PageRoutingModule {}
