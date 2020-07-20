import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';


import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';
import { ApprobateurRoutingModule } from './approbateur-routing.module';

import { MesavisComponent } from './mesavis/mesavis.component';
import { DocsjourComponent } from './docsjour/docsjour.component';
import { AvisretardComponent } from './avisretard/avisretard.component';
import { RojourComponent } from './rojour/rojour.component';


@NgModule({
  declarations: [ MesavisComponent, DocsjourComponent, AvisretardComponent, RojourComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApprobateurRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TooltipModule,
    PickListModule,
    TableModule
  ]
})
export class ApprobateurModule { }
