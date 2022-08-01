import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa26Page } from './house-na26.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa26PageRoutingModule {}
