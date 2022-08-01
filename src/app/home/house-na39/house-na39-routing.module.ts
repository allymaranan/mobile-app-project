import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa39Page } from './house-na39.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa39PageRoutingModule {}
