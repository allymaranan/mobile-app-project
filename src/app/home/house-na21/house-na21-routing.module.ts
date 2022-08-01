import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa21Page } from './house-na21.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa21PageRoutingModule {}
