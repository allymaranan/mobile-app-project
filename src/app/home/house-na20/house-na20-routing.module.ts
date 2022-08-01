import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa20Page } from './house-na20.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa20PageRoutingModule {}
