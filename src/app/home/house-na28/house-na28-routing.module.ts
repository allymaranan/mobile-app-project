import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa28Page } from './house-na28.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa28PageRoutingModule {}
