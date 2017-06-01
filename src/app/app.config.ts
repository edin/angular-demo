import {Route} from '@angular/router';
import {DashboardHome} from './dashboard/dashboard.home'
import {SettingsHome}  from './settings/settings.home'
import {AboutHome}  from './about/about.home'

export const appRoutes : Route[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardHome },
    { path: 'settings',  component: SettingsHome },
    { path: 'about',  component: AboutHome },
];

