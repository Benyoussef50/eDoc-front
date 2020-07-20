import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { ProjectsRoutingModule } from '../projects/projects-routing.module'

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TooltipModule,
    PickListModule,
    TableModule
  ]
})
export class ProjectsModule { }
