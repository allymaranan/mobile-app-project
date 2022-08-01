import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa24Page } from './house-na24.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa24PageRoutingModule {}
