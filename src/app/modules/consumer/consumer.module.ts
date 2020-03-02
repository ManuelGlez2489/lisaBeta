import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { InitComponent } from './_pages/init/init.component';
import { ConsumerTopBar } from './_components/top-bar/consumer-top-bar.component';

import { ConsumerSideBarComponent } from './_components/consumer-side-bar/consumer-side-bar.component';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './_pages/home/home.component'
import { UpcomingApptsComponent } from './_components/upcoming-appts/upcoming-appts.component';
import { EventsTimelineComponent } from './_components/events-timeline/events-timeline.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { EventCardComponent } from './_components/event-card/event-card.component'


@NgModule({
  declarations: [InitComponent, ConsumerTopBar, ConsumerSideBarComponent, UpcomingApptsComponent, HomeComponent, EventsTimelineComponent, ProfileComponent, EventCardComponent],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule
  ]
})
export class ConsumerModule { }
