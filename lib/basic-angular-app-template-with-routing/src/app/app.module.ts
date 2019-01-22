import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { SecurityModule } from './security/security.module';
import { appRouter } from './app.router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  AngularFontAwesomeModule,
    appRouter,
    MaterialModule,
    SharedModule,
    SecurityModule,
    LandingPageModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
