import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './common/layout/layout.component';
import { SideNavComponent } from './common/layout/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutComponent, SideNavComponent, HomeComponent, TrainDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
