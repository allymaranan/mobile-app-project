import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa15Page } from './house-na15.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa15PageRoutingModule {}
