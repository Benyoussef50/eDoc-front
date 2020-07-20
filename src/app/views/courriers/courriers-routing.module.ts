import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourriersComponent } from './courriers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CourriersComponent,
    data: {
      title: 'Courriers'
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourriersRoutingModule { }
