import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DropdownModule } from 'primeng/dropdown';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from './_services/auth.service';
import { SweetAlertService } from 'angular-sweetalert-service/js';
import { TokenStorageService } from './_services/token-storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CanActivateAuthGuard } from './_services/can-activate.authguard';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor, authInterceptorProviders } from './_services/_security/auth.interceptor';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import Swal from 'sweetalert2'
import { MenuItem } from 'primeng/api';
import { ContextMenuModule, ContextMenu} from 'primeng/primeng';
import { ProjectsComponent } from './views/projects/projects.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    TooltipModule,
    PickListModule,
    TableModule,
    CheckboxModule,
    TabMenuModule,
    ReactiveFormsModule,
   
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ProjectsComponent

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    AuthService,
    TokenStorageService,
    CanActivateAuthGuard,
    authInterceptorProviders,
    SweetAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
