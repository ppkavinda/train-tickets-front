import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './public/pages/common/not-found/not-found.component';
import { LandingComponent } from './public/pages/landing/landing.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { FooterComponent } from './public/pages/landing/footer/footer.component';
import { UpcommingComponent } from './public/pages/landing/upcomming/upcomming.component';
import { LoginComponent } from './public/pages/common/login/login.component';
import { RegisterComponent } from './public/pages/common/register/register.component';
import { AuthService } from './public/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './public/pages/common/alert/alert.component';
import { ContactUsComponent } from './public/pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    LandingComponent,
    MainNavComponent,
    // FooterComponent,
    UpcommingComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    // AlertComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
