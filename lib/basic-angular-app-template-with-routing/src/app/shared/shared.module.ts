import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './directives/alert/alert.component';
import { AlertService } from './directives/alert/alert.service';
import { FormsModule } from '@angular/forms';
import { MultiValueFieldComponent } from './components/multi-value-field/multi-value-field.component';
import { MatrixFooterComponent } from './components/matrix-footer/matrix-footer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    AlertComponent,
    MultiValueFieldComponent,
    MatrixFooterComponent
  ],
  exports: [
    MaterialModule,
    AlertComponent,
    PageNotFoundComponent,
    MultiValueFieldComponent,
    FormsModule
  ],
  providers: [
    ErrorInterceptor,
    AlertService,

    // fakeBackendProvider,
  ],
})
export class SharedModule { }
