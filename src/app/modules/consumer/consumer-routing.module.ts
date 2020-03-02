import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './_pages/init/init.component';

import { UpcomingApptsComponent } from './_components/upcoming-appts/upcoming-appts.component';
import { HomeComponent } from './_pages/home/home.component';
import { ProfileComponent } from './_pages/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    data: { title: 'Upcoming Appointments' },
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'Home' } },
      { path: 'upcoming-appointments', component: UpcomingApptsComponent, data: { title: 'Upcoming Appointments' } },
      { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
