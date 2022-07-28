import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyClientOwnerPageRoutingModule } from './privacy-policy-client-owner-routing.module';

import { PrivacyPolicyClientOwnerPage } from './privacy-policy-client-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyClientOwnerPageRoutingModule
  ],
  declarations: [PrivacyPolicyClientOwnerPage]
})
export class PrivacyPolicyClientOwnerPageModule {}
