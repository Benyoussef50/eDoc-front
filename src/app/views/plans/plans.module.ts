import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SweetAlertService } from 'angular-sweetalert-service/js';
import { DatePipe } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {formatDate} from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {MenuModule,} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import { ContextMenuModule} from 'primeng/contextmenu';




import { PlansRoutingModule } from './plans-routing.module';
import { TousplansComponent, MessageComponent } from './tousplans/tousplans.component';
import { PlansjourComponent } from './plansjour/plansjour.component';
import { PlanssemaineComponent } from './planssemaine/planssemaine.component';
import { AvisjourComponent } from './avisjour/avisjour.component';
import { AvissemaineComponent } from './avissemaine/avissemaine.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AddComponent } from './tousplans/add/add.component';


//import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [
    TousplansComponent,
    PlansjourComponent,
    PlanssemaineComponent,
    AvisjourComponent,
    AvissemaineComponent,
    MessageComponent,
    AddComponent,
  
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlansRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TooltipModule,
    PickListModule,
    TableModule,
    TabMenuModule,
    PdfViewerModule,
    DropdownModule,
    FileUploadModule,
    OverlayPanelModule,
    DynamicDialogModule,
    DialogModule,
    ButtonModule,
    NgxDocViewerModule,
    RadioButtonModule,
    NgxExtendedPdfViewerModule,
    CarouselModule,
    TabViewModule,
    AccordionModule,
    MenuModule,
    TieredMenuModule,
    SlideMenuModule,
    ContextMenuModule
  ],
  providers: [
    SweetAlertService,
    DatePipe
  ]
})
export class PlansModule { }
