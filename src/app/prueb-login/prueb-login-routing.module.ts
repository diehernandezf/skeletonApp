import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebLoginPage } from './prueb-login.page';

const routes: Routes = [
  {
    path: '',
    component: PruebLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebLoginPageRoutingModule {}
