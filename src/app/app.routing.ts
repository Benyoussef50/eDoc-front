import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CanActivateAuthGuard } from './_services/can-activate.authguard';
import { ProjectsComponent } from './views/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
   }, 
   {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'projects'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      //  {
      //   path: 'projects',
      //   canActivate: [CanActivateAuthGuard],
      //   loadChildren: () => import('./views/projects/projects.module').then(m => m.ProjectsModule)
      // },
      {
        path: 'plans',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/plans/plans.module').then(m => m.PlansModule)
      },
      {
        path: 'approbateur',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/approbateur/approbateur.module').then(m => m.ApprobateurModule)
      },
      {
        path: 'courriers',
        canActivate: [CanActivateAuthGuard],
        loadChildren: () => import('./views/courriers/courriers.module').then(m => m.CourriersModule)
      },
     
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
