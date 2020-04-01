import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './_pages/init/init.component';

import { UpcomingApptsComponent } from './_components/upcoming-appts/upcoming-appts.component';
import { HomeComponent } from './_pages/home/home.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { EventInfoComponent } from './_components/event-info/event-info.component';


const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    data: { title: '' },
    children: [
      { path: 'dashboard', component: HomeComponent, data: { title: 'Dashboard' } },
      { path: 'upcoming-appointments', component: UpcomingApptsComponent, data: { title: 'Upcoming Appointments' } },
      { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
      { path: 'event/:id', component: EventInfoComponent, data: { title: 'Event' } },
      {
        path: '',
        redirectTo: 'dashboard',
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
