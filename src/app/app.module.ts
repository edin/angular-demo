import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdButtonModule, MdCardModule,    MdMenuModule, MdToolbarModule, 
  MdIconModule,   MdSidenavModule, MdListModule, MdInputModule
} from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { SettingsHome } from './settings/settings.home';
import { DashboardHome} from './dashboard/dashboard.home';
import { AboutHome}     from './about/about.home';
import { AppComponent } from './app.component';
import { appRoutes }    from './app.config';


@NgModule({
  declarations: [
    AppComponent,
    SettingsHome,
    DashboardHome,
    AboutHome,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdInputModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
}) 

export class AppModule { }