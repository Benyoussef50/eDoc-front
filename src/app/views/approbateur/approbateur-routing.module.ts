import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RojourComponent } from './rojour/rojour.component';
import { DocsjourComponent } from './docsjour/docsjour.component';
import { AvisretardComponent } from './avisretard/avisretard.component';
import { MesavisComponent } from './mesavis/mesavis.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Approbateur'
    },
    children: [
      {
        path: '',
        redirectTo: 'mesavis'
      },
      {
        path: 'mesavis',
        component: MesavisComponent,
        data: {
          title: 'Rechercher mes avis'
        }
      },
      {
        path: 'avisretard',
        component: AvisretardComponent,
        data: {
          title: 'Mes avis en retard'
        }
      },
      {
        path: 'docsjour',
        component: DocsjourComponent,
        data: {
          title: 'Documents à approuver du jour'
        }
      },{
        path: 'rojour',
        component: RojourComponent,
        data: {
          title: 'Suivi RO du jour'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApprobateurRoutingModule { }
