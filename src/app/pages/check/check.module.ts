import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckPage]
})
export class CheckPageModule {}
