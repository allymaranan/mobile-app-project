import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa40Page } from './house-na40.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa40PageRoutingModule {}
