import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa27Page } from './house-na27.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa27PageRoutingModule {}
