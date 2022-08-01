import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails10Page } from './house-details10.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails10PageRoutingModule {}
