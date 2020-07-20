import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourriersComponent } from './courriers.component';
import { FormsModule } from '@angular/forms';
import { CourriersRoutingModule } from './courriers-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [CourriersComponent],
  imports: [
    CommonModule,
    FormsModule,
    CourriersRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TooltipModule,
    PickListModule,
    TableModule
  ]
})
export class CourriersModule { }
