import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,
        AgGridModule.withComponents([]),
        HttpClientModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule {}
