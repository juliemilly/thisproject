import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindclientPageRoutingModule } from './findclient-routing.module';

import { FindclientPage } from './findclient.page';
import { ClienteService } from '../service/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteService,
    FindclientPageRoutingModule
  ],
  declarations: [FindclientPage]
})
export class FindclientPageModule {}
