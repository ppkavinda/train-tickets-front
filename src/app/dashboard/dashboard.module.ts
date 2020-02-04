import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './common/layout/layout.component';
import { SideNavComponent } from './common/layout/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LayoutComponent, SideNavComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
