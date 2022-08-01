import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNa16Page } from './house-na16.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNa16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNa16PageRoutingModule {}
