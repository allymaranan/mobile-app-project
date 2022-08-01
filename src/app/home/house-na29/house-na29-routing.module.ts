import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa29Page } from './house-na29.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa29PageRoutingModule {}
