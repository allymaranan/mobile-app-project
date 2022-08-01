import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa44Page } from './house-na44.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa44PageRoutingModule {}
