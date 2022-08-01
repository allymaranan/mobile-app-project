import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa17Page } from './house-na17.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa17PageRoutingModule {}
