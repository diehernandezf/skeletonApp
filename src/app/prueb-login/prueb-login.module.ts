import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PruebLoginPageRoutingModule } from './prueb-login-routing.module';

import { PruebLoginPage } from './prueb-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PruebLoginPageRoutingModule
  ],
  declarations: [PruebLoginPage]
})
export class PruebLoginPageModule {}
