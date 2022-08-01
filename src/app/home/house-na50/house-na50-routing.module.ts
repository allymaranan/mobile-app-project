import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa50Page } from './house-na50.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa50PageRoutingModule {}
