import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa49Page } from './house-na49.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa49PageRoutingModule {}
