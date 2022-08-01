import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa46Page } from './house-na46.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa46PageRoutingModule {}
