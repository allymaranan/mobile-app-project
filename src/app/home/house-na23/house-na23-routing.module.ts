import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa23Page } from './house-na23.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa23PageRoutingModule {}
