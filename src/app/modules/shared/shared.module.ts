import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './_components/breadcrumbs/breadcrumbs.component';
import { LoadingComponent } from './_components/loading/loading.component';
import {dateTimeZonePipe} from './_pipes/date.pipe';


@NgModule({
  declarations: [AlertComponent, BreadcrumbsComponent, LoadingComponent,dateTimeZonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FormsModule, ReactiveFormsModule,BreadcrumbsComponent, LoadingComponent,
    dateTimeZonePipe
  ]
})
export class SharedModule { }
