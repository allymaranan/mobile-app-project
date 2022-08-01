import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa34Page } from './house-na34.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa34PageRoutingModule {}
