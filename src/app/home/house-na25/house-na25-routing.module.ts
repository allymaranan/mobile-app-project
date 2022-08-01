import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa25Page } from './house-na25.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa25PageRoutingModule {}
