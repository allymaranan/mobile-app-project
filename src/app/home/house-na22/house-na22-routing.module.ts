import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa22Page } from './house-na22.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa22PageRoutingModule {}
