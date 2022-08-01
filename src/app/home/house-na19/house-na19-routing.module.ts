import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa19Page } from './house-na19.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa19PageRoutingModule {}
