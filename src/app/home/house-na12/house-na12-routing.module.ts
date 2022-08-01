import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa12Page } from './house-na12.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa12PageRoutingModule {}
