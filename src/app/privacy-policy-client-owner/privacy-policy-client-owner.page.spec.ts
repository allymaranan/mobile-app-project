import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyClientOwnerPage } from './privacy-policy-client-owner.page';

describe('PrivacyPolicyClientOwnerPage', () => {
  let component: PrivacyPolicyClientOwnerPage;
  let fixture: ComponentFixture<PrivacyPolicyClientOwnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyClientOwnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyClientOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
