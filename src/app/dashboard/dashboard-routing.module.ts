import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AuthGuard } from '../public/services/auth.guard';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'details',
        component: TrainDetailsComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'all-bookings', 
        component: AllBookingsComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        // children: [
        //   {
        //     path: 'edit',
        //     component: ProfileEditComponent,
        //   }
        // ]
      }, {
        path: 'edit', 
        component: ProfileEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
