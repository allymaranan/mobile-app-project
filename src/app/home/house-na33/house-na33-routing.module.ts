import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa33Page } from './house-na33.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa33PageRoutingModule {}
