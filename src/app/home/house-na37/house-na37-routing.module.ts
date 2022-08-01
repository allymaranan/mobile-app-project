import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa37Page } from './house-na37.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa37PageRoutingModule {}
