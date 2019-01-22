import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatrixCommunicationChannelEncryptionService } from './services/matrix-communication-channel-encryption.service';
import { AuthenticatedContentLayoutComponent } from './components/authenticated-content-layout/authenticated-content-layout.component';
import { MatrixHeaderComponent } from '../shared/components/matrix-header/matrix-header.component';
// tslint:disable-next-line:max-line-length
import { UnauthenticatedContentLayoutComponent } from './components/unauthenticated-content-layout/unauthenticated-content-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    MatrixHeaderComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticatedContentLayoutComponent,
    UnauthenticatedContentLayoutComponent
  ],
  exports: [
    AuthenticatedContentLayoutComponent
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthenticationService,
    UserService,
    MatrixCommunicationChannelEncryptionService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SecurityModule { }
