import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRouter } from './landing-page.routing';
import { MaterialModule } from '../../shared/material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRouter
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
