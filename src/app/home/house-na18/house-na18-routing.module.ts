import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa18Page } from './house-na18.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa18PageRoutingModule {}
