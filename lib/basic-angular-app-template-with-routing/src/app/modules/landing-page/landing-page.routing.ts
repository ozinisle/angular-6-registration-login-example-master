import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../../security/guards/auth.guard';
import {
    AuthenticatedContentLayoutComponent
} from '../../security/components/authenticated-content-layout/authenticated-content-layout.component';

const LANDING_PAGE_ROUTES: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        component: AuthenticatedContentLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: LandingPageComponent,
                // canActivate: [AuthGuard]
            }
        ]

    }
];

export const LandingPageRouter = RouterModule.forChild(LANDING_PAGE_ROUTES);
