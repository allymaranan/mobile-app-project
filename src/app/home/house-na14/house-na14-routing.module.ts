import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa14Page } from './house-na14.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa14PageRoutingModule {}
