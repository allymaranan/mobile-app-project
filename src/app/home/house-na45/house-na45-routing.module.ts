import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa45Page } from './house-na45.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa45PageRoutingModule {}
