import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'house-na1',
    loadChildren: () => import('./house-na1/house-na1.module').then( m => m.HouseNA1PageModule)
  },
  {
    path: 'house-na2',
    loadChildren: () => import('./house-na2/house-na2.module').then( m => m.HouseNA2PageModule)
  },
  {
    path: 'house-na3',
    loadChildren: () => import('./house-na3/house-na3.module').then( m => m.HouseNA3PageModule)
  },
  {
    path: 'house-na4',
    loadChildren: () => import('./house-na4/house-na4.module').then( m => m.HouseNA4PageModule)
  },
  {
    path: 'house-na5',
    loadChildren: () => import('./house-na5/house-na5.module').then( m => m.HouseNA5PageModule)
  },
  {
    path: 'house-na6',
    loadChildren: () => import('./house-na6/house-na6.module').then( m => m.HouseNA6PageModule)
  },
  {
    path: 'house-na7',
    loadChildren: () => import('./house-na7/house-na7.module').then( m => m.HouseNA7PageModule)
  },
  {
    path: 'house-na8',
    loadChildren: () => import('./house-na8/house-na8.module').then( m => m.HouseNA8PageModule)
  },
  {
    path: 'house-na9',
    loadChildren: () => import('./house-na9/house-na9.module').then( m => m.HouseNA9PageModule)
  },
  {
    path: 'house-na10',
    loadChildren: () => import('./house-na10/house-na10.module').then( m => m.HouseNA10PageModule)
  },
  {
    path: 'house-na11',
    loadChildren: () => import('./house-na11/house-na11.module').then( m => m.HouseNa11PageModule)
  },
  {
    path: 'house-na12',
    loadChildren: () => import('./house-na12/house-na12.module').then( m => m.HouseNa12PageModule)
  },
  {
    path: 'house-na13',
    loadChildren: () => import('./house-na13/house-na13.module').then( m => m.HouseNa13PageModule)
  },
  {
    path: 'house-na14',
    loadChildren: () => import('./house-na14/house-na14.module').then( m => m.HouseNa14PageModule)
  },
  {
    path: 'house-na15',
    loadChildren: () => import('./house-na15/house-na15.module').then( m => m.HouseNa15PageModule)
  },
  {
    path: 'house-na16',
    loadChildren: () => import('./house-na16/house-na16.module').then( m => m.HouseNa16PageModule)
  },
  {
    path: 'house-na17',
    loadChildren: () => import('./house-na17/house-na17.module').then( m => m.HouseNa17PageModule)
  },
  {
    path: 'house-na18',
    loadChildren: () => import('./house-na18/house-na18.module').then( m => m.HouseNa18PageModule)
  },
  {
    path: 'house-na19',
    loadChildren: () => import('./house-na19/house-na19.module').then( m => m.HouseNa19PageModule)
  },
  {
    path: 'house-na20',
    loadChildren: () => import('./house-na20/house-na20.module').then( m => m.HouseNa20PageModule)
  },
  {
    path: 'house-na21',
    loadChildren: () => import('./house-na21/house-na21.module').then( m => m.HouseNa21PageModule)
  },
  {
    path: 'house-na22',
    loadChildren: () => import('./house-na22/house-na22.module').then( m => m.HouseNa22PageModule)
  },
  {
    path: 'house-na23',
    loadChildren: () => import('./house-na23/house-na23.module').then( m => m.HouseNa23PageModule)
  },
  {
    path: 'house-na24',
    loadChildren: () => import('./house-na24/house-na24.module').then( m => m.HouseNa24PageModule)
  },
  {
    path: 'house-na25',
    loadChildren: () => import('./house-na25/house-na25.module').then( m => m.HouseNa25PageModule)
  },
  {
    path: 'house-na26',
    loadChildren: () => import('./house-na26/house-na26.module').then( m => m.HouseNa26PageModule)
  },
  {
    path: 'house-na27',
    loadChildren: () => import('./house-na27/house-na27.module').then( m => m.HouseNa27PageModule)
  },
  {
    path: 'house-na28',
    loadChildren: () => import('./house-na28/house-na28.module').then( m => m.HouseNa28PageModule)
  },
  {
    path: 'house-na29',
    loadChildren: () => import('./house-na29/house-na29.module').then( m => m.HouseNa29PageModule)
  },
  {
    path: 'house-na30',
    loadChildren: () => import('./house-na30/house-na30.module').then( m => m.HouseNa30PageModule)
  },
  {
    path: 'house-na31',
    loadChildren: () => import('./house-na31/house-na31.module').then( m => m.HouseNa31PageModule)
  },
  {
    path: 'house-na32',
    loadChildren: () => import('./house-na32/house-na32.module').then( m => m.HouseNa32PageModule)
  },
  {
    path: 'house-na33',
    loadChildren: () => import('./house-na33/house-na33.module').then( m => m.HouseNa33PageModule)
  },
  {
    path: 'house-na34',
    loadChildren: () => import('./house-na34/house-na34.module').then( m => m.HouseNa34PageModule)
  },
  {
    path: 'house-na35',
    loadChildren: () => import('./house-na35/house-na35.module').then( m => m.HouseNa35PageModule)
  },
  {
    path: 'house-na36',
    loadChildren: () => import('./house-na36/house-na36.module').then( m => m.HouseNa36PageModule)
  },
  {
    path: 'house-na37',
    loadChildren: () => import('./house-na37/house-na37.module').then( m => m.HouseNa37PageModule)
  },
  {
    path: 'house-na38',
    loadChildren: () => import('./house-na38/house-na38.module').then( m => m.HouseNa38PageModule)
  },
  {
    path: 'house-na39',
    loadChildren: () => import('./house-na39/house-na39.module').then( m => m.HouseNa39PageModule)
  },
  {
    path: 'house-na40',
    loadChildren: () => import('./house-na40/house-na40.module').then( m => m.HouseNa40PageModule)
  },
  {
    path: 'house-na41',
    loadChildren: () => import('./house-na41/house-na41.module').then( m => m.HouseNa41PageModule)
  },
  {
    path: 'house-na42',
    loadChildren: () => import('./house-na42/house-na42.module').then( m => m.HouseNa42PageModule)
  },
  {
    path: 'house-na43',
    loadChildren: () => import('./house-na43/house-na43.module').then( m => m.HouseNa43PageModule)
  },
  {
    path: 'house-na44',
    loadChildren: () => import('./house-na44/house-na44.module').then( m => m.HouseNa44PageModule)
  },
  {
    path: 'house-na45',
    loadChildren: () => import('./house-na45/house-na45.module').then( m => m.HouseNa45PageModule)
  },
  {
    path: 'house-na46',
    loadChildren: () => import('./house-na46/house-na46.module').then( m => m.HouseNa46PageModule)
  },
  {
    path: 'house-na47',
    loadChildren: () => import('./house-na47/house-na47.module').then( m => m.HouseNa47PageModule)
  },
  {
    path: 'house-na48',
    loadChildren: () => import('./house-na48/house-na48.module').then( m => m.HouseNa48PageModule)
  },
  {
    path: 'house-na49',
    loadChildren: () => import('./house-na49/house-na49.module').then( m => m.HouseNa49PageModule)
  },
  {
    path: 'house-na50',
    loadChildren: () => import('./house-na50/house-na50.module').then( m => m.HouseNa50PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
