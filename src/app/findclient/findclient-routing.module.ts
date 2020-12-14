import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindclientPage } from './findclient.page';

const routes: Routes = [
  {
    path: '',
    component: FindclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindclientPageRoutingModule {}
