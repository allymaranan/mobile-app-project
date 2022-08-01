import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa35Page } from './house-na35.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa35PageRoutingModule {}
