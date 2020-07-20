import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { Chantier } from '../../model/chantier.model';
import { TokenStorageService } from '../../_services/token-storage.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: ['.badge { margin-right: 3px; }']
})

export class ProjectsComponent implements OnInit {
  chantiers: Chantier[] = [];
  username: string;
  selectedChantier: Chantier;
  totalElements: number = 0;
  cols: any[];
  currentUser: any ;
  public avatar:string ;

  constructor(private router: Router,
     private _dataService: DataService,
      private tokenStorage: TokenStorageService,
      private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.avatar = `https://ui-avatars.com/api/?name=${this.currentUser.username}`;
    this.cols = [
      { field: 'nomchantier', header: 'Nom du projet' },
      { field: 'codeedifice', header: 'Code Edifice' },
      { field: 'codechantier', header: 'Code du projet' },
      { field: 'uo', header: 'Unité opérationnelle' },
      { field: 'datecreation', header: 'Crée le' },
      { field: 'ownername', header: 'Crée par' },
    ];

    this.loadChantiers();
    
  }
  RowSelected() {
   // console.log(this.selectedChantier.codechantier)
    this.tokenStorage.saveCodeChantier(this.selectedChantier.codechantier);
    this.tokenStorage.saveChantier(this.selectedChantier);
    this.router.navigate(['/plans']);
  }
  loadChantiers() {
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUser().username;
    }
    this._dataService.loadChantiers(this.username).subscribe(data => {
      this.chantiers = data
     
    });
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
// SELECT * from `bgc__fiche_chantier` WHERE id IN
//(SELECT chantier_id  from `bgc__acteur_chantier` where acteur_id = (SELECT id FROM `bgc__acteur` WHERE username='srvEDOCAGENT'))

// SELECT c.* from `bgc__fiche_chantier` c
// INNER JOIN `bgc__acteur_chantier` ac
// INNER JOIN `bgc__acteur` a 
// ON c.id = ac.chantier_id AND ac.acteur_id = a.id 
// where username = 'srvEDOCAGENT'


