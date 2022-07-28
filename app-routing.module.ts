import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
  {
    path: 'login-client',
    loadChildren: () => import('./login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./login-owner/login-owner.module').then( m => m.LoginOwnerPageModule)
  },
  {
    path: 'house-details',
    loadChildren: () => import('./house-details/house-details.module').then( m => m.HouseDetailsPageModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('./register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'log-in-as',
    loadChildren: () => import('./log-in-as/log-in-as.module').then( m => m.LogInAsPageModule)
  },
  {
    path: 'register-as',
    loadChildren: () => import('./register-as/register-as.module').then( m => m.RegisterAsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'privacy-policy-client-owner',
    loadChildren: () => import('./privacy-policy-client-owner/privacy-policy-client-owner.module').then( m => m.PrivacyPolicyClientOwnerPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'add-post-owner',
    loadChildren: () => import('./add-post-owner/add-post-owner.module').then( m => m.AddPostOwnerPageModule)
  },
  {
    path: 'post-page-owner',
    loadChildren: () => import('./post-page-owner/post-page-owner.module').then( m => m.PostPageOwnerPageModule)
  },
  {
    path: 'menu-client',
    loadChildren: () => import('./menu-client/menu-client.module').then( m => m.MenuClientPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'register-owner',
    loadChildren: () => import('./register-owner/register-owner.module').then( m => m.RegisterOwnerPageModule)
  },
  {
    path: 'home-owner',
    loadChildren: () => import('./home-owner/home-owner.module').then( m => m.HomeOwnerPageModule)
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./profile-client/profile-client.module').then( m => m.ProfileClientPageModule)
  },
  {
    path: 'profile-owner',
    loadChildren: () => import('./profile-owner/profile-owner.module').then( m => m.ProfileOwnerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
