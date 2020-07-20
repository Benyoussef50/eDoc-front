
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AvissemaineComponent } from './avissemaine/avissemaine.component';
import { AvisjourComponent } from './avisjour/avisjour.component';
import { PlanssemaineComponent } from './planssemaine/planssemaine.component';
import { PlansjourComponent } from './plansjour/plansjour.component';
import { TousplansComponent, MessageComponent } from './tousplans/tousplans.component';
import { AddComponent } from './tousplans/add/add.component';


// TousplansComponent, PlansjourComponent, PlanssemaineComponent, AvisjourComponent, AvissemaineComponent
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Plans'
    },
    children: [
      {
        path: '',
        redirectTo: 'tousplans'
      },
      {
        path: 'tousplans',
        component: TousplansComponent,
        data: {
          title: 'Tous les plans'
        },
        children: [{
          path: 'message',
          component: MessageComponent,
        },
       
        
        ]
      }, {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Ajouter un plan'
        }
      },
      {
        path: 'plansjour',
        component: PlansjourComponent,
        data: {
          title: 'Plans du jour'
        }
      },
      {
        path: 'planssemaine',
        component: PlanssemaineComponent,
        data: {
          title: 'Plans de la semaine'
        }
      }, {
        path: 'avisjour',
        component: AvisjourComponent,
        data: {
          title: 'Avis du jour'
        }
      }, {
        path: 'avissemaine',
        component: AvissemaineComponent,
        data: {
          title: 'Avis de la semaine'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlansRoutingModule { }
