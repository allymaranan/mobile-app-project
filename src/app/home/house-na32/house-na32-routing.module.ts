import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa32Page } from './house-na32.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa32PageRoutingModule {}
