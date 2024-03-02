import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DasboastlayoutComponent } from './layouts/dasboastlayout/dasboastlayout.component';


@NgModule({
  declarations: [
    DasboastlayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
