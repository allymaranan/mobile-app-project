import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa36Page } from './house-na36.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa36PageRoutingModule {}
