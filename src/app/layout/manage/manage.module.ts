import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { PageHeaderModule } from '../../shared';
import { ManageComponent } from './manage.component';

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule, ManageRoutingModule, PageHeaderModule
  ]
})
export class ManageModule { }
