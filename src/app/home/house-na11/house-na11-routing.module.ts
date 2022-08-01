import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa11Page } from './house-na11.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa11PageRoutingModule {}
