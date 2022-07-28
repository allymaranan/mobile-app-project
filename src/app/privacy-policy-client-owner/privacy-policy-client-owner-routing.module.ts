import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyClientOwnerPage } from './privacy-policy-client-owner.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyClientOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPolicyClientOwnerPageRoutingModule {}
